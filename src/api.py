from os import chdir, system
from os.path import expanduser, join as joinPath
import os
from functools import lru_cache
import platform


class CLib:
    @staticmethod
    def cd(path) -> None:
        try:
            chdir(expanduser(path))
        except FileNotFoundError:
            print(f"File Not Found: {path}")


class Installer:
    @staticmethod
    def pip(package: str) -> None:
        system(f"pip3 install {package}")

    @staticmethod
    def certifi() -> None:
        if platform.system() == "Darwin":
            if os.path.isdir("/Applications/Python 3.9"):
                system("source /Applications/Python\ 3.9/Install\ Certificates.command")
            elif os.path.isdir("/Applications/Python 3.8"):
                system("source /Applications/Python\ 3.8/Install\ Certificates.command")
            elif os.path.isdir("/Applications/Python 3.7"):
                system("source /Applications/Python\ 3.7/Install\ Certificates.command")
            else:
                print("Python 3.7 or 3.8 or 3.9 is not installed")
        else:
            print("This feature is currently only supported on Darwin (macOS).")

    @staticmethod
    def sql_scanner_deps() -> None:
        Installer.pip("requests")
        Installer.pip("bs4")

    @staticmethod
    def keylogger_deps() -> None:
        Installer.pip("keyboard")

    @staticmethod
    def dos_deps() -> None:
        Installer.pip("scapy")


class Git:
    @staticmethod
    @lru_cache(maxsize=1)
    def repo_dir() -> str:
        return joinPath(expanduser("~"), "csk/repositories")

    @staticmethod
    def clone(url) -> None:
        system(f"git clone https://github.com/{url} {Git.repo_dir()}")
