from sys import argv, exit
from src import repl
import platform

if __name__ == "__main__":
    if len(argv) == 1:
        exit(repl.main())
    else:
        if argv[1] == "-v" or argv[1] == "--version":
            print(f"CSK v0.2.0 – {platform.system()}")
        elif argv[1] == "-h" or argv[1] == "--help":
            print("Usage: csk [OPTION]")
        elif argv[1] == "-r" or argv[1] == "--run":
            exit(0)