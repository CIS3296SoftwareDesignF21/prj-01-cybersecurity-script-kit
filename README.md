# _Final Project: Cybersecurity Script Kit_

&nbsp; 🔷 &nbsp;
[Week One Contributions](https://github.com/CIS3296SoftwareDesignF21/prj-01-cybersecurity-script-kit/blob/ReadmeV2/markdowns/Week1.md)
&nbsp; 🔷 &nbsp;
[Week Two Contributions](https://github.com/CIS3296SoftwareDesignF21/prj-01-cybersecurity-script-kit/blob/ReadmeV2/markdowns/Week2.md)
&nbsp; 🔷 &nbsp;
[Week Three Contributions](https://github.com/CIS3296SoftwareDesignF21/prj-01-cybersecurity-script-kit/blob/ReadmeV2/markdowns/Week3.md)
&nbsp; 🔷 &nbsp; [Week Four Contributions](https://github.com/CIS3296SoftwareDesignF21/prj-01-cybersecurity-script-kit/blob/main/markdowns/week4.md)


 _For any cybersecurity professional, scripting is an important part of testing the defense of any network or computer system. This command line tool encompasses the entire Cyber Kill chain developed by Lockheed martin and is every pen-testers secrect weopon! Click **[here](https://csk3296.herokuapp.com/)** to learn more about our command line tool  and the Cyber Kill chain Cyber Kill chain._

 


|     | Table of Contents                                     |
| --- | ----------------------------------------------------- |
| 🛠   | [Installation](#installation)                         |
| 🧠   | [Usage](#usage)                                       |
| 👨‍💻  | [Development Instructions](https://github.com/CIS3296SoftwareDesignF21/prj-01-cybersecurity-script-kit/blob/ReadmeV2/markdowns/devInstruc.md) |
| ⬆️  | [Updates and Changes](#updates-and-changes)           |
| 👁   | [Vision](https://github.com/CIS3296SoftwareDesignF21/prj-01-cybersecurity-script-kit/blob/ReadmeV2/markdowns/Personas%2B.md)            |
| 💁  | [The Four Personas](https://github.com/CIS3296SoftwareDesignF21/prj-01-cybersecurity-script-kit/blob/ReadmeV2/markdowns/Personas%2B.md) |
| 📊  | [UML Diagram](https://github.com/CIS3296SoftwareDesignF21/prj-01-cybersecurity-script-kit/blob/ReadmeV2/markdowns/UML.md)               |
| 🧐 | [Issues and Resolutions](https://github.com/CIS3296SoftwareDesignF21/prj-01-cybersecurity-script-kit/blob/Chrome/markdowns/issues.md)               |






## Installation

| [![](readme/downloads/csk-darwin.png)](https://github.com/CIS3296SoftwareDesignF21/prj-01-cybersecurity-script-kit/releases/download/v0.0.3-beta/csk-installer.zsh) | [![](readme/downloads/csk-linux.png)](installer/csk-installer.bash) | [![](readme/downloads/csk-win.png)](installer/csk-installer.bat) |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | ---------------------------------------------------------------- |

After downloading, double click the file. Done. 😀 👍

## **Usage**

Checking version and platform information: `csk -v` or `csk --version`.

Getting help with usage: `csk -h` or `csk --help`.

### Available Commands

> The "Available Commands" are commands which can be accessed via the CLI

Arguments enclosed within `(` parenthesis `)` are optional and will be prompted
for upon execution of the script.

| Commmand           | Arguments                   | Description                                                 |
| ------------------ | --------------------------- | ----------------------------------------------------------- |
| `version`          | none                        | Prints the `csk` shell version                              |
| `exit`             | none                        | Exits the `csk` shell                                       |
| `cd`               | `dir`                       | Changed the shell directory to an absolute or relative path |
| `clone`            | `repo`                      | Pulls a git repository                                      |
| `certifi`          | none                        | Installs the python certificate for `http-headers`          |
| `http-headers`     | `(url)`                     | Retrieves and prints the `http(s)` headers for a given URL  |
| `password-cracker` | none                        | Attempts to crack a password                                |
| `sql-inject`       | none                        | Checks for vulnerability "SQL Injection"       |
| `floodSYN`         | none                        |  Floods repeated SYN packets                                   |
| `install`          | `-d` or `--deps`, `package` | Installs the dependencies required for a specific script    |
| `keylogger`        | none                        | Keeps track of all keystrokes on the keyboard               |
| `chrome`        | none                        | Extracts and decrypts Google Chrome passwords              |
| `n-scanner`        | none                        | Scans the IP address for devices on that network              |
| `wifi-pw`        | none                        | Pulles known wifi network and their passwords              |
| `p-scanner`        | none                        | Scans target for open ports            |


If another command is provided, then the command is run via the system shell program.

## **Updates and changes**

> Instead of hosting on own site, make library directly on github. To test scripts, we will use GitHub CI. We will use the command line to download directly from GitHub.

<br>

---

**This tool is for educational purposes only and is to be used ethically.** 

---
