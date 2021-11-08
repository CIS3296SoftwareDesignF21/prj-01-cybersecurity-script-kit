from os import chdir, system
from os.path import expanduser, join as joinPath
from functools import lru_cache


class CLib:
    @staticmethod
    def cd(path):
        chdir(expanduser(path))


class Git:
    @staticmethod
    @lru_cache(maxsize=1)
    def repo_dir():
        return joinPath(expanduser("~"), "csk/repositories")

    @staticmethod
    def clone(url):
        system(f"git clone https://github.com/{url} {Git.repo_dir()}")
