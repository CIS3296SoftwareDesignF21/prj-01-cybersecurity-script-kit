from sys import argv, exit
import platform
from os import getcwd
import getargs
from os import system
from api import CLib, Git, Installer
from kit import http_headers, password_cracker, sql_inject


def prompt() -> str:
    return input(f"{getcwd()} $ ")


def repl() -> int:
    while True:
        prompt_input = prompt()  # Get the input from the prompt
        cmd = getargs.getcmd(prompt_input)  # Extract the command from the input
        args = getargs.getargs(
            getargs.removecmd(prompt_input)
        )  # Extract the arguments from the input

        if cmd == "exit":
            exit(0)
        elif cmd == "version":
            print("0.0.1-alpha")
        elif cmd == "cd":
            CLib.cd(args[0])
        elif cmd == "clone":
            Git.clone(*args)
        elif cmd == "certifi":  # Installs certificates via Certifi
            Installer.certifi()
        elif cmd == "http-headers":
            http_headers.run(args[0] if len(args) > 0 else input("URL: "))
        elif cmd == "password-cracker":
            password_cracker.run()
        elif cmd == "sql-inject":
            sql_inject.run()
        elif cmd == "install":
            if args[0] == "--deps" or args[0] == "-d":
                if args[1] == "sql-scanner":
                    Installer.sql_scanner_deps()
                elif args[1] == "keylogger":
                    Installer.keylogger_deps()
                else:
                    print(f"Package {args[1]} does not exist or has no dependencies")
            else:
                print(f"No package found with name {args[0]}")
        else:
            system(prompt_input)

    return 0


if __name__ == "__main__":
    if len(argv) == 1:
        exit(repl())
    else:
        if argv[1] == "-v" or argv[1] == "--version":
            print(f"CSK v0.2.0 – {platform.system()}")
        elif argv[1] == "-h" or argv[1] == "--help":
            print("Usage: csk [OPTION]")
        elif argv[1] == "-r" or argv[1] == "--run":
            print("Running from the command line is not supported yet.")