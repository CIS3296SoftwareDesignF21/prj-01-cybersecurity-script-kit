from os import getcwd, system, chdir
import getargs


def prompt() -> str:
    return input(f"{getcwd()} $ ")


def main() -> int:
    while True:
        prompt_input = prompt()  # Get the input from the prompt
        cmd = getargs.getcmd(prompt_input)  # Extract the command from the input
        args = getargs.getargs(prompt_input)  # Extract the arguments from the input

        if cmd == "exit":
            exit(0)
        elif cmd == "version":
            print("0.0.1-alpha")
        elif cmd == "cd":
            chdir(args[1])
        else:
            system(prompt_input)

    return 0