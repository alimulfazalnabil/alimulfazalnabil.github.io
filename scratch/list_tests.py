import os

scratch_dir = r"h:\Software Projects\alimulfazalnabil.github.io-main\scratch"
if os.path.exists(scratch_dir):
    print("Files in scratch:")
    for f in os.listdir(scratch_dir):
        print("  -", f)
else:
    print("scratch directory does not exist")
