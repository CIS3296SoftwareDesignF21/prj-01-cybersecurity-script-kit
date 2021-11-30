
# UML Diagram

Main file is CSK that the user will invoke to run the program. If there are no args it will then run the repl.py file that will runs bash commands from within the API. This will make it easier to install the repo. It will install the certificate and any required dependencies to run the code.

![CSK_UML](https://user-images.githubusercontent.com/4074683/142000069-0cab529f-a541-466b-9952-e60c1cdf8ab1.jpg)

<br>

# Sequence Diagrams

### Use Case 1

This sequence diagram shows the user begin the csk tool by invoking the repl method. The command line interface then prompts the user to enter a command. The user enters a command, and getcmd() is called to extract the command from the user input. In this case, the user wants to run the port scanner, so after this command is extracted from the input the run() method for recon2.py script is invoked with a host or URL as a command line argument.

![Sequence 1](https://github.com/CIS3296SoftwareDesignF21/prj-01-cybersecurity-script-kit/blob/fixSequence/SD1v2.png?raw=true)

<br>

###  Use Case 2

This sequence diagram shows how the user would go about running the script that gets header information. After the main function is invoked, the user is prompted to input a command. The user's input is parsed with the getcmd() command. The selected script's run() method is called with the user's selected URL. The header information is printed to the terminal.


![Sequence 2](https://github.com/CIS3296SoftwareDesignF21/prj-01-cybersecurity-script-kit/blob/fixSequence/SD2v2.png?raw=true)
