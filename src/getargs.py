def removecmd(s: str) -> str:
    return s[s.index(" ") if " " in s else len(s) :]


def getcmd(s: str) -> str:
    return s[: s.index(" ") if " " in s else len(s)]


def getargs(s: str) -> list:
    args = []
    while s != "":
        if s[0] == '"':
            args.append(s[1 : s.index('"', 1)])
            s = s[s.index('"', 1) + 1 :]
        else:
            args.append(s[: s.index(" ") if " " in s else len(s)])
            s = s[(s.index(" ") if " " in s else len(s) - 1) + 1 :]
    return args
