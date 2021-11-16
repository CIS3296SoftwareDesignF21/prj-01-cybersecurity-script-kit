from os import getcwd, system, chdir
from src import getargs
from src.api import Git, CLib, Installer
from src.kit import recon1
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
        elif cmd == "recon":
            if args[0] == "1":
                recon1.run(args[1] if len(args) > 1 else input("URL: "))
            else:
                print(f"Could not find script with matching number: {args[0]}")
        else:
            system(prompt_input)

    return 0