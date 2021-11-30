
# Common Issues and Resolutions

## Installation is not Working? (All Platforms)

Prior to installation, please:

-   Ensure you have a working Python 3.6+ installation.
-   Ensure `pip` is installed (the Python Package Installer)
-   Ensure `pyinstaller` is installed:
    -   Run `pip3 install pyinstaller`
    -   Run `pip install pyinstaller`, if the previous command does not work

### Windows: PowerShell believes the script kit contains a virus?

If you are on Windows, when working with the PowerShell, you may require elevated privileges.
To escelate your privileges to `admin`, run the command below:

```batch
PS > Start-Process powershell -Verb runAs
```

You may also have to turn off `Real-time Protection` in your Virus & Threat Protection settings.

![](readme/win-threat.png)