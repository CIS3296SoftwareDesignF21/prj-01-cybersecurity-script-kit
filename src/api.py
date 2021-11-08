from os import chdir, system, homedir


class CLib:
    @staticmethod
    def cd(path):
        chdir(path)


class Git:
    @staticmethod
    @cached
    def repo_dir():
        return f"{homedir()}/csk/repositories"

    @staticmethod
    def clone(url):
        system(f"git clone https://github.com/{url} {Git.repo_dir()}")
