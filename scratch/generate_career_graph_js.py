import json
import os

def create_career_graph_js():
    base_dir = r"h:\Software Projects\alimulfazalnabil.github.io-main"
    json_path = os.path.join(base_dir, "scratch", "graph_data.json")
    with open(json_path, "r", encoding="utf-8") as f:
        graph_data = json.load(f)

    graph_data_str = json.dumps(graph_data, indent=2)

    js_code = f"""/**
 * Career & Engineering Knowledge Graph (Vanilla SVG + Force Simulation)
 * Author: Alimul Fazal Nabil — AI Solutions Engineer
 * Zero external dependencies. Fully responsive, accessible, and high-performance.
 */
(() => {{
  const GRAPH_DATA = {graph_data_str};

  let initialized = false;
  let simulationRunning = false;
  let transform = {{ x: 0, y: 0, k: 1 }};
  let isDraggingCanvas = false;
  let isDraggingNode = false;
  let activeDragNode = null;
  let dragStart = {{ x: 0, y: 0 }};
  let selectedNode = null;
  let activeFilter = 'all';
  let searchQuery = '';
  let simulationTimer = null;

  // Viewport dimensions
  const WIDTH = 960;
  const HEIGHT = 620;
  const CENTER = {{ x: WIDTH / 2, y: HEIGHT / 2 }};

  // Node & edge runtime maps
  const nodeMap = new Map();
  const adjacency = new Map();

  GRAPH_DATA.nodes.forEach((n, idx) => {{
    // Initial deterministic positions arranged in concentric circles by category
    let angle = 0;
    let dist = 100;
    if (n.category === 'domain') {{
      const dIdx = GRAPH_DATA.nodes.filter(x => x.category === 'domain').indexOf(n);
      angle = (dIdx / 7) * 2 * Math.PI - Math.PI / 2;
      dist = 180;
    }} else if (n.category === 'role') {{
      const rIdx = GRAPH_DATA.nodes.filter(x => x.category === 'role').indexOf(n);
      angle = (rIdx / 5) * 2 * Math.PI + Math.PI / 5;
      dist = 270;
    }} else if (n.category === 'technology') {{
      const tIdx = GRAPH_DATA.nodes.filter(x => x.category === 'technology').indexOf(n);
      angle = (tIdx / 14) * 2 * Math.PI;
      dist = 110;
    }} else {{
      // project
      const pIdx = GRAPH_DATA.nodes.filter(x => x.category === 'project').indexOf(n);
      angle = (pIdx / 27) * 2 * Math.PI + Math.PI / 7;
      dist = 230 + (pIdx % 3) * 30;
    }}

    n.x = CENTER.x + Math.cos(angle) * dist + (Math.random() - 0.5) * 20;
    n.y = CENTER.y + Math.sin(angle) * dist + (Math.random() - 0.5) * 20;
    n.vx = 0;
    n.vy = 0;
    nodeMap.set(n.id, n);
    adjacency.set(n.id, new Set());
  }});

  // Resolve edge source/target
  const resolvedEdges = GRAPH_DATA.edges.map(e => {{
    const s = nodeMap.get(e.source);
    const t = nodeMap.get(e.target);
    if (s && t) {{
      adjacency.get(e.source).add(e.target);
      adjacency.get(e.target).add(e.source);
    }}
    return {{ ...e, sourceNode: s, targetNode: t }};
  }}).filter(e => e.sourceNode && e.targetNode);

  // DOM elements cache
  let container = null;
  let svg = null;
  let zoomGroup = null;
  let edgesGroup = null;
  let nodesGroup = null;
  let labelsGroup = null;
  let inspector = null;
  let accessibleTree = null;

  function init() {{
    container = document.getElementById('archiveGraphView');
    if (!container) return;

    svg = document.getElementById('careerGraphSvg');
    zoomGroup = document.getElementById('graphZoomGroup');
    edgesGroup = document.getElementById('graphEdgesGroup');
    nodesGroup = document.getElementById('graphNodesGroup');
    labelsGroup = document.getElementById('graphLabelsGroup');
    inspector = document.getElementById('graphInspector');
    accessibleTree = document.getElementById('graphAccessibleTree');

    if (!svg || !zoomGroup) return;

    if (!initialized) {{
      buildGraphDOM();
      setupEventListeners();
      buildAccessibleTree();
      initialized = true;
    }}

    // Check reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {{
      // Compute 100 ticks synchronously
      for (let i = 0; i < 100; i++) tickSimulation(0.05);
      renderPositions();
    }} else {{
      runSimulation();
    }}
  }}

  function buildGraphDOM() {{
    edgesGroup.innerHTML = '';
    nodesGroup.innerHTML = '';
    labelsGroup.innerHTML = '';

    // 1. Build Edges
    resolvedEdges.forEach((e, idx) => {{
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('class', `graph-edge edge-type-${{e.type}}`);
      line.setAttribute('data-source', e.source);
      line.setAttribute('data-target', e.target);
      line.setAttribute('id', `edge-${{idx}}`);
      edgesGroup.appendChild(line);
      e.domElement = line;
    }});

    // 2. Build Nodes & Labels
    GRAPH_DATA.nodes.forEach(n => {{
      const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      g.setAttribute('class', `graph-node-group node-cat-${{n.category}}`);
      g.setAttribute('data-id', n.id);
      g.setAttribute('tabindex', '0');
      g.setAttribute('role', 'button');
      g.setAttribute('aria-label', `${{n.title}} (${{n.category}}). Press Enter to inspect details.`);

      // Outer glow / halo circle
      const halo = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      halo.setAttribute('class', 'node-halo');
      halo.setAttribute('r', n.radius + 5);
      halo.setAttribute('fill', 'none');
      halo.setAttribute('stroke', n.color);

      // Core circle
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('class', 'node-circle');
      circle.setAttribute('r', n.radius);
      circle.setAttribute('fill', '#070913');
      circle.setAttribute('stroke', n.color);
      circle.setAttribute('stroke-width', n.category === 'domain' ? '3' : '2');

      // Inner dot for domains/roles
      if (n.category === 'domain' || n.category === 'role') {{
        const inner = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        inner.setAttribute('r', n.radius / 2.5);
        inner.setAttribute('fill', n.color);
        inner.setAttribute('opacity', '0.85');
        g.appendChild(inner);
      }}

      g.appendChild(halo);
      g.appendChild(circle);
      nodesGroup.appendChild(g);
      n.domElement = g;

      // Label text
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.setAttribute('class', `graph-label label-cat-${{n.category}}`);
      text.setAttribute('text-anchor', 'middle');
      text.setAttribute('dy', n.radius + 14);
      const displayTitle = n.shortTitle || (n.title.length > 22 ? n.title.slice(0, 20) + '…' : n.title);
      text.textContent = displayTitle;
      labelsGroup.appendChild(text);
      n.labelElement = text;
    }});

    renderPositions();
  }}

  // Physics simulation with convergence cooling
  function runSimulation() {{
    if (simulationRunning) return;
    simulationRunning = true;
    let alpha = 1.0;
    const decay = 0.965;

    function step() {{
      if (alpha < 0.005) {{
        simulationRunning = false;
        return;
      }}
      tickSimulation(alpha);
      renderPositions();
      alpha *= decay;
      requestAnimationFrame(step);
    }}
    requestAnimationFrame(step);
  }}

  function tickSimulation(alpha) {{
    const nodes = GRAPH_DATA.nodes;

    // 1. Repulsion (Coulomb force)
    for (let i = 0; i < nodes.length; i++) {{
      const a = nodes[i];
      for (let j = i + 1; j < nodes.length; j++) {{
        const b = nodes[j];
        let dx = b.x - a.x;
        let dy = b.y - a.y;
        let dist = Math.sqrt(dx * dx + dy * dy) || 1;
        if (dist < 260) {{
          const force = (3500 / (dist * dist)) * alpha;
          const fx = (dx / dist) * force;
          const fy = (dy / dist) * force;
          if (a !== activeDragNode) {{ a.vx -= fx; a.vy -= fy; }}
          if (b !== activeDragNode) {{ b.vx += fx; b.vy += fy; }}
        }}
      }}
    }}

    // 2. Attraction along edges (Hooke's spring force)
    resolvedEdges.forEach(e => {{
      const a = e.sourceNode;
      const b = e.targetNode;
      let dx = b.x - a.x;
      let dy = b.y - a.y;
      let dist = Math.sqrt(dx * dx + dy * dy) || 1;
      let desiredDist = e.type === 'domain' ? 90 : (e.type === 'role' ? 120 : 100);
      let force = ((dist - desiredDist) * 0.035) * alpha;
      let fx = (dx / dist) * force;
      let fy = (dy / dist) * force;
      if (a !== activeDragNode) {{ a.vx += fx; a.vy += fy; }}
      if (b !== activeDragNode) {{ b.vx -= fx; b.vy -= fy; }}
    }});

    // 3. Centering & boundary constraints
    nodes.forEach(n => {{
      if (n === activeDragNode) return;
      n.vx += (CENTER.x - n.x) * 0.008 * alpha;
      n.vy += (CENTER.y - n.y) * 0.008 * alpha;

      n.vx *= 0.65;
      n.vy *= 0.65;

      n.x += n.vx;
      n.y += n.vy;

      // Keep inside bounds
      const pad = n.radius + 10;
      n.x = Math.max(pad, Math.min(WIDTH - pad, n.x));
      n.y = Math.max(pad, Math.min(HEIGHT - pad, n.y));
    }});
  }}

  function renderPositions() {{
    resolvedEdges.forEach(e => {{
      if (!e.domElement) return;
      e.domElement.setAttribute('x1', e.sourceNode.x);
      e.domElement.setAttribute('y1', e.sourceNode.y);
      e.domElement.setAttribute('x2', e.targetNode.x);
      e.domElement.setAttribute('y2', e.targetNode.y);
    }});

    GRAPH_DATA.nodes.forEach(n => {{
      if (!n.domElement) return;
      n.domElement.setAttribute('transform', `translate(${{n.x}}, ${{n.y}})`);
      if (n.labelElement) {{
        n.labelElement.setAttribute('x', n.x);
        n.labelElement.setAttribute('y', n.y);
      }}
    }});
  }}

  function setupEventListeners() {{
    // 1. Mouse Dragging & Canvas Panning
    svg.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);

    // Touch support (two-finger pan, single-finger node drag)
    svg.addEventListener('touchstart', onTouchStart, {{ passive: false }});
    window.addEventListener('touchmove', onTouchMove, {{ passive: false }});
    window.addEventListener('touchend', onTouchEnd);

    // Zoom buttons
    const zoomInBtn = document.getElementById('graphZoomInBtn');
    const zoomOutBtn = document.getElementById('graphZoomOutBtn');
    const resetBtn = document.getElementById('graphResetBtn');
    if (zoomInBtn) zoomInBtn.addEventListener('click', () => applyZoom(1.2));
    if (zoomOutBtn) zoomOutBtn.addEventListener('click', () => applyZoom(0.8));
    if (resetBtn) resetBtn.addEventListener('click', resetView);

    // Filter pills
    const filterButtons = container.querySelectorAll('.graph-filter-btn');
    filterButtons.forEach(btn => {{
      btn.addEventListener('click', () => {{
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        setFilter(btn.dataset.type);
      }});
    }});

    // Search input
    const searchInput = document.getElementById('graphSearchInput');
    if (searchInput) {{
      searchInput.addEventListener('input', (e) => {{
        searchQuery = e.target.value.trim().toLowerCase();
        applyFilterAndSearch();
      }});
    }}

    // Node click & hover
    nodesGroup.addEventListener('click', (e) => {{
      const group = e.target.closest('.graph-node-group');
      if (!group) return;
      const nodeId = group.getAttribute('data-id');
      const node = nodeMap.get(nodeId);
      if (node) selectNode(node);
    }});

    nodesGroup.addEventListener('mouseover', (e) => {{
      const group = e.target.closest('.graph-node-group');
      if (!group || activeDragNode) return;
      const nodeId = group.getAttribute('data-id');
      highlightNeighborhood(nodeId);
    }});

    nodesGroup.addEventListener('mouseout', (e) => {{
      if (activeDragNode) return;
      if (selectedNode) {{
        highlightNeighborhood(selectedNode.id);
      }} else {{
        clearHighlights();
      }}
    }});

    // Keyboard support
    nodesGroup.addEventListener('keydown', (e) => {{
      const group = e.target.closest('.graph-node-group');
      if (!group) return;
      const nodeId = group.getAttribute('data-id');
      const node = nodeMap.get(nodeId);
      if (!node) return;

      if (e.key === 'Enter' || e.key === ' ') {{
        e.preventDefault();
        selectNode(node);
      }} else if (e.key === 'Escape') {{
        resetView();
      }}
    }});

    // Inspector close button
    const closeInspectorBtn = document.getElementById('closeInspectorBtn');
    if (closeInspectorBtn) {{
      closeInspectorBtn.addEventListener('click', () => {{
        closeInspector();
        clearHighlights();
      }});
    }}

    // Text Hierarchy Toggle
    const textToggleBtn = document.getElementById('graphTextToggleBtn');
    if (textToggleBtn && accessibleTree) {{
      textToggleBtn.addEventListener('click', () => {{
        const isHidden = accessibleTree.hidden;
        accessibleTree.hidden = !isHidden;
        textToggleBtn.textContent = isHidden ? 'Hide Text Hierarchy' : 'Show Text Hierarchy';
        textToggleBtn.setAttribute('aria-expanded', String(isHidden));
      }});
    }}
  }}

  function onPointerDown(e) {{
    const nodeGroup = e.target.closest('.graph-node-group');
    if (nodeGroup) {{
      const nodeId = nodeGroup.getAttribute('data-id');
      activeDragNode = nodeMap.get(nodeId);
      isDraggingNode = true;
    }} else {{
      isDraggingCanvas = true;
      dragStart = {{ x: e.clientX - transform.x, y: e.clientY - transform.y }};
      svg.style.cursor = 'grabbing';
    }}
  }}

  function onPointerMove(e) {{
    if (isDraggingNode && activeDragNode) {{
      const pt = getSvgPoint(e.clientX, e.clientY);
      activeDragNode.x = pt.x;
      activeDragNode.y = pt.y;
      renderPositions();
    }} else if (isDraggingCanvas) {{
      transform.x = e.clientX - dragStart.x;
      transform.y = e.clientY - dragStart.y;
      updateTransform();
    }}
  }}

  function onPointerUp() {{
    if (isDraggingNode) {{
      isDraggingNode = false;
      activeDragNode = null;
      runSimulation();
    }}
    if (isDraggingCanvas) {{
      isDraggingCanvas = false;
      svg.style.cursor = 'grab';
    }}
  }}

  function onTouchStart(e) {{
    if (e.touches.length === 1) {{
      const touch = e.touches[0];
      const target = document.elementFromPoint(touch.clientX, touch.clientY);
      const nodeGroup = target ? target.closest('.graph-node-group') : null;
      if (nodeGroup) {{
        e.preventDefault();
        const nodeId = nodeGroup.getAttribute('data-id');
        activeDragNode = nodeMap.get(nodeId);
        isDraggingNode = true;
      }}
    }}
  }}

  function onTouchMove(e) {{
    if (isDraggingNode && activeDragNode && e.touches.length === 1) {{
      e.preventDefault();
      const touch = e.touches[0];
      const pt = getSvgPoint(touch.clientX, touch.clientY);
      activeDragNode.x = pt.x;
      activeDragNode.y = pt.y;
      renderPositions();
    }}
  }}

  function onTouchEnd() {{
    if (isDraggingNode) {{
      isDraggingNode = false;
      activeDragNode = null;
      runSimulation();
    }}
  }}

  function getSvgPoint(clientX, clientY) {{
    const rect = svg.getBoundingClientRect();
    const x = (clientX - rect.left - transform.x) / transform.k;
    const y = (clientY - rect.top - transform.y) / transform.k;
    return {{ x, y }};
  }}

  function applyZoom(scaleFactor) {{
    transform.k = Math.max(0.4, Math.min(2.5, transform.k * scaleFactor));
    updateTransform();
  }}

  function updateTransform() {{
    if (zoomGroup) {{
      zoomGroup.setAttribute('transform', `translate(${{transform.x}}, ${{transform.y}}) scale(${{transform.k}})`);
    }}
  }}

  function highlightNeighborhood(nodeId) {{
    const neighbors = adjacency.get(nodeId) || new Set();

    GRAPH_DATA.nodes.forEach(n => {{
      const isTarget = n.id === nodeId;
      const isNeighbor = neighbors.has(n.id);
      if (n.domElement) {{
        n.domElement.classList.toggle('node-highlight', isTarget || isNeighbor);
        n.domElement.classList.toggle('node-dimmed', !isTarget && !isNeighbor);
      }}
      if (n.labelElement) {{
        n.labelElement.classList.toggle('label-highlight', isTarget || isNeighbor);
        n.labelElement.classList.toggle('label-dimmed', !isTarget && !isNeighbor);
      }}
    }});

    resolvedEdges.forEach(e => {{
      const isIncident = e.source === nodeId || e.target === nodeId;
      if (e.domElement) {{
        e.domElement.classList.toggle('edge-highlight', isIncident);
        e.domElement.classList.toggle('edge-dimmed', !isIncident);
      }}
    }});
  }}

  function clearHighlights() {{
    GRAPH_DATA.nodes.forEach(n => {{
      if (n.domElement) {{
        n.domElement.classList.remove('node-highlight', 'node-dimmed');
      }}
      if (n.labelElement) {{
        n.labelElement.classList.remove('label-highlight', 'label-dimmed');
      }}
    }});
    resolvedEdges.forEach(e => {{
      if (e.domElement) {{
        e.domElement.classList.remove('edge-highlight', 'edge-dimmed');
      }}
    }});
  }}

  function selectNode(node) {{
    selectedNode = node;
    highlightNeighborhood(node.id);
    openInspector(node);
  }}

  function openInspector(node) {{
    if (!inspector) return;
    inspector.hidden = false;

    const kicker = inspector.querySelector('.inspector-kicker');
    const title = inspector.querySelector('.inspector-title');
    const period = inspector.querySelector('.inspector-period');
    const desc = inspector.querySelector('.inspector-desc');
    const chipsWrap = inspector.querySelector('.inspector-chips');
    const actions = inspector.querySelector('.inspector-actions');

    const catLabels = {{
      domain: 'ENGINEERING DOMAIN',
      role: 'CAREER MILESTONE',
      technology: 'CORE TECHNOLOGY',
      project: 'TECHNICAL IMPLEMENTATION'
    }};

    if (kicker) kicker.textContent = `${{catLabels[node.category] || node.category.toUpperCase()}} · ${{node.id.toUpperCase()}}`;
    if (title) title.textContent = node.title;
    if (period) period.textContent = node.period || '';
    if (desc) desc.textContent = node.desc || node.contribution || '';

    // Connected entities chips
    if (chipsWrap) {{
      chipsWrap.innerHTML = '';
      const neighborIds = Array.from(adjacency.get(node.id) || []);
      neighborIds.forEach(nId => {{
        const neighbor = nodeMap.get(nId);
        if (!neighbor) return;
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.className = `inspector-chip chip-${{neighbor.category}}`;
        chip.textContent = neighbor.shortTitle || neighbor.title;
        chip.title = `Jump to ${{neighbor.title}}`;
        chip.addEventListener('click', () => selectNode(neighbor));
        chipsWrap.appendChild(chip);
      }});
    }}

    // Actions
    if (actions) {{
      actions.innerHTML = '';
      if (node.caseStudyUrl) {{
        const csBtn = document.createElement('a');
        csBtn.className = 'button button-primary';
        csBtn.href = node.caseStudyUrl;
        csBtn.innerHTML = 'Read Deep Case Study <span aria-hidden="true">→</span>';
        actions.appendChild(csBtn);
      }}
      if (node.repoUrl) {{
        const repoBtn = document.createElement('a');
        repoBtn.className = 'repo-btn';
        repoBtn.href = node.repoUrl;
        repoBtn.target = '_blank';
        repoBtn.rel = 'noopener noreferrer';
        repoBtn.innerHTML = 'View Repository <span aria-hidden="true">↗</span>';
        actions.appendChild(repoBtn);
      }}
    }}
  }}

  function closeInspector() {{
    if (inspector) inspector.hidden = true;
    selectedNode = null;
  }}

  function setFilter(filterType) {{
    activeFilter = filterType;
    applyFilterAndSearch();
  }}

  function applyFilterAndSearch() {{
    GRAPH_DATA.nodes.forEach(n => {{
      const matchesFilter = (activeFilter === 'all') ||
        (activeFilter === 'project' && n.category === 'project') ||
        (activeFilter === 'domain' && (n.category === 'domain' || n.category === 'role')) ||
        (activeFilter === 'tech' && n.category === 'technology');

      const matchesSearch = !searchQuery ||
        n.title.toLowerCase().includes(searchQuery) ||
        (n.desc && n.desc.toLowerCase().includes(searchQuery)) ||
        (n.technologies && n.technologies.some(t => t.toLowerCase().includes(searchQuery)));

      const visible = matchesFilter && matchesSearch;
      if (n.domElement) n.domElement.style.display = visible ? '' : 'none';
      if (n.labelElement) n.labelElement.style.display = visible ? '' : 'none';
    }});

    resolvedEdges.forEach(e => {{
      const srcVisible = e.sourceNode.domElement && e.sourceNode.domElement.style.display !== 'none';
      const tgtVisible = e.targetNode.domElement && e.targetNode.domElement.style.display !== 'none';
      if (e.domElement) e.domElement.style.display = (srcVisible && tgtVisible) ? '' : 'none';
    }});
  }}

  function resetView() {{
    transform = {{ x: 0, y: 0, k: 1 }};
    updateTransform();
    clearHighlights();
    closeInspector();
    activeFilter = 'all';
    searchQuery = '';
    const searchInput = document.getElementById('graphSearchInput');
    if (searchInput) searchInput.value = '';
    const filterButtons = container.querySelectorAll('.graph-filter-btn');
    filterButtons.forEach(b => b.classList.toggle('active', b.dataset.type === 'all'));
    applyFilterAndSearch();
    runSimulation();
  }}

  function buildAccessibleTree() {{
    if (!accessibleTree) return;
    accessibleTree.innerHTML = '';

    const heading = document.createElement('h3');
    heading.textContent = 'Structured Career & Project Knowledge Tree';
    accessibleTree.appendChild(heading);

    const intro = document.createElement('p');
    intro.textContent = 'This hierarchical tree lists all 7 verified domains, career milestone roles, and technical implementations with their connected technologies for screen readers and keyboard users.';
    accessibleTree.appendChild(intro);

    // Group by domains
    const domains = GRAPH_DATA.nodes.filter(n => n.category === 'domain');
    domains.forEach(d => {{
      const details = document.createElement('details');
      details.className = 'accessible-domain-group';
      const summary = document.createElement('summary');
      summary.innerHTML = `<strong>${{d.title}}</strong> (${{d.desc}})`;
      details.appendChild(summary);

      const list = document.createElement('ul');
      const domainProjects = GRAPH_DATA.nodes.filter(n => n.category === 'project' && n.domain === d.domain);
      domainProjects.forEach(p => {{
        const item = document.createElement('li');
        item.innerHTML = `<strong>${{p.title}}</strong> (${{p.period}}) — ${{p.desc}}`;
        if (p.caseStudyUrl) {{
          item.innerHTML += ` · <a href="${{p.caseStudyUrl}}">Case Study</a>`;
        }}
        if (p.repoUrl) {{
          item.innerHTML += ` · <a href="${{p.repoUrl}}" target="_blank" rel="noopener noreferrer">Code</a>`;
        }}
        list.appendChild(item);
      }});

      details.appendChild(list);
      accessibleTree.appendChild(details);
    }});
  }}

  window.careerGraph = {{
    init,
    reset: resetView,
    setFilter,
    selectNode: (id) => {{
      const node = nodeMap.get(id);
      if (node) selectNode(node);
    }}
  }};
}})();
"""

    out_file = os.path.join(base_dir, "assets", "js", "career-graph.js")
    with open(out_file, "w", encoding="utf-8") as f:
        f.write(js_code)

    print(f"Generated {out_file} successfully (size: {len(js_code)} bytes)")

if __name__ == "__main__":
    create_career_graph_js()
