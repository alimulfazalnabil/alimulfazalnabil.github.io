import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Alimul Fazal Nabil | AI Solutions Engineer',
  description: 'AI Solutions Engineer building Generative AI, RAG, Computer Vision, Cloud AI and automation solutions.',
  keywords: ['AI Solutions Engineer','Generative AI','Agentic AI','RAG','Azure OpenAI','Computer Vision','MLOps','Python']
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
