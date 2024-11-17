# Neo-Unchecker

This is a Node Application that can Fake the working of IamNeo Platform's Environment Checking Application NeoExam Checker.
The App Creates a Server at Port 9999 that sends the response to Neocolab about the Test Environment being OK.
The Response always remains ok even if other apps like screensharing is on and devtools are opened.

This Content is Strictly for Educational Purposes and I do not promote any Unfair means in the Examination.

## Requirements

Node.js 

## How to use

1 : Download Code as Zip and Extract it.

2 : Now open the extracted folder in VS Code or any IDE of your Choice.

3 : Open Terminal (ctrl + `) and Type the following Commands.

```
npm i
Node index.js
```
You will see Server Starts to run at Port 9999
If you get Error Like Port already in use then please close the Neochecker app then retry.

Now you can Open NeoColab Tests without installing Neochecker

If you still cant use Ai website and it keeps closing tabs then remove NeoExamShield and install Dirtyshield Extension from Here : [Download DirtyShield](https://github.com/ayushshukla8920/Dirtyshield/archive/refs/heads/main.zip)

## Troubleshooting 

If you Encounter error like this while running npm i

```
Error on terminal: nodemon.ps1 cannot be loaded because running scripts is disabled on this system. For more information, see about_Execution_Policies at https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.2
```
then Open windows PowerShell as Administrator and Execute the Following command
```
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```
then press Y for yes and enter and try running the Application again..


Now Enjoy !!
