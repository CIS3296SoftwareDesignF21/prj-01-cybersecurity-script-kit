import urllib.request
import sys

# requires url as command line arg

# some way to run /Applications/Python 3.7/Install Certificates.command


def __init__():
    pass


def run(url: str) -> None:
    try:
        response = urllib.request.urlopen(url)
        if response.getcode() == 200:
            print("Authentication required: ", response.getheader("Authentication"))
            print("Info: ", response.info())
        else:
            print("an error occurred")
    except urllib.error.HTTPError as e:
        print(
            """An error occurred: {} The response code was {}""".format(e, e.getcode())
        )


if __name__ == "__main__":
    run(sys.argv[1])
