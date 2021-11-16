from os import getcwd, system, chdir
from src import getargs
from src.api import Git, CLib, Installer
from src.kit import http_headers, password_cracker, port_scanner, sql_inject
from sys import exit


def prompt() -> str:
    return input(f"{getcwd()} $ ")


def main() -> int:
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
        else:
            system(prompt_input)

    return 0