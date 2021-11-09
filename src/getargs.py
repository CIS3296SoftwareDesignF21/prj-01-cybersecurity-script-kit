from functools import lru_cache


@lru_cache(maxsize=5)
def removecmd(s: str) -> str:
    return s[s.index(" ") if " " in s else len(s) :]


@lru_cache(maxsize=5)
def getcmd(s: str) -> str:
    return s[: s.index(" ") if " " in s else len(s)]


@lru_cache(maxsize=5)
def getargs(s: str) -> list:
    return [sym for sym in s.split(" ") if sym.strip() != ""]
