import os
import platform
from os import getcwd, system
from shutil import which
from sys import argv, exit

import getargs
from api import CLib, Git, Installer, KitImportUtil

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
            program = KitImportUtil.include("http_headers")
            program.run(args[0] if len(args) > 0 else input("URL: "))
        elif cmd == "password-cracker":
            program = KitImportUtil.include("password_cracker")
            program.run()
        elif cmd == "sql-inject":
            program = KitImportUtil.include("sql_inject")
            program.run()
        elif cmd == "floodSYN":
            program = KitImportUtil.include("floodSYN")
            program.run()
        elif cmd == "install":
            if args[0] == "--deps" or args[0] == "-d":
                if args[1] == "sql-scanner":
                    Installer.sql_scanner_deps()
                elif args[1] == "keylogger":
                    Installer.keylogger_deps()
                elif args[1] == "dos" or args[1] == "floodSYN":
                    Installer.dos_deps()
                else:
                    print(f"Package {args[1]} does not exist or has no dependencies")
            else:
                print(f"No package found with name {args[0]}")
        elif cmd == "keylogger":
            program = KitImportUtil.include("keylogger")
            kl = program.Keylogger(
                interval=program.SEND_REPORT_EVERY, report_method="file"
            )
            kl.start()
        elif cmd == "dos":
            program = KitImportUtil.include("dos")
            program.run()
        elif cmd == "shred":
            program = KitImportUtil.include("fileShred")
            program.run()
        elif cmd == "arpspoof":
            program = KitImportUtil.include("arpspoof")
            if len(args) == 0:
                program.run(
                    input("Enter the target IP: "), input("Enter the gateway IP: ")
                )
            elif len(args) == 1:
                program.run(args[0], input("Enter the gateway IP: "))
            else:
                program.run(args[0], args[1])
        elif cmd == "change-mac":
            args_str = " ".join(args)
            python_cmd = "python3" if which("python3") is not None else "python"
            system(f"{python_cmd} {os.path.realpath()}/kit/changeMac.py {args_str}")
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
