from os import chdir, system
from os.path import expanduser, join as joinPath
from functools import lru_cache


class CLib:
    @staticmethod
    def cd(path) -> None:
        try:
            chdir(expanduser(path))
        except FileNotFoundError:
            print(f"File Not Found: {path}")


class Git:
    @staticmethod
    @lru_cache(maxsize=1)
    def repo_dir() -> str:
        return joinPath(expanduser("~"), "csk/repositories")

    @staticmethod
    def clone(url) -> None:
        system(f"git clone https://github.com/{url} {Git.repo_dir()}")
