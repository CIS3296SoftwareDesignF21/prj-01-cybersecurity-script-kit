from sys import argv, exit
import platform
from os import getcwd
import getargs
from os import system
from api import CLib, Git, Installer
from kit import (
    http_headers,
    password_cracker,
    sql_inject,
    floodSYN,
    keylogger,
    dos,
    fileShred,
)
import platform

CSK_VERSION = "0.0.4"


def print_art() -> None:
    print(
        """
 ██████ ███████ ██   ██     ██    ██  ██████      ██████     ██   ██ 
██      ██      ██  ██      ██    ██ ██  ████    ██  ████    ██   ██ 
██      ███████ █████       ██    ██ ██ ██ ██    ██ ██ ██    ███████ 
██           ██ ██  ██       ██  ██  ████  ██    ████  ██         ██ 
 ██████ ███████ ██   ██       ████    ██████  ██  ██████  ██      ██                                                                
    """
    )


def prompt() -> str:
    return input(f"{getcwd()} $ ")


def repl() -> int:
    print_art()
    print(f"CSK v{CSK_VERSION} – {platform.system()}")
    while True:
        prompt_input = prompt()  # Get the input from the prompt
        cmd = getargs.getcmd(prompt_input)  # Extract the command from the input
        args = getargs.getargs(
            getargs.removecmd(prompt_input)
        )  # Extract the arguments from the input

        if cmd == "exit":
            exit(0)
        elif cmd == "version":
            print(f"CSK v{CSK_VERSION}")
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
        elif cmd == "floodSYN":
            floodSYN.run()
        elif cmd == "install":
            if args[0] == "--deps" or args[0] == "-d":
                if args[1] == "sql-scanner":
                    Installer.sql_scanner_deps()
                elif args[1] == "keylogger":
                    Installer.keylogger_deps()
                elif args[1] == "dos":
                    Installer.dos_deps()
                else:
                    print(f"Package {args[1]} does not exist or has no dependencies")
            else:
                print(f"No package found with name {args[0]}")
        elif cmd == "keylogger":
            kl = keylogger.Keylogger(
                interval=keylogger.SEND_REPORT_EVERY, report_method="file"
            )
            kl.start()
        elif cmd == "dos":
            dos.run()
        elif cmd == "shred":
            fileShred.run()
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