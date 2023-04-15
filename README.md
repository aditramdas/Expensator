![alt text](https://github.com/aditramdas/Expensator/blob/main/Expense.png?raw=true)
# Expensator

Expensator, a solution to one of the most clumsily managed things, finance. Our tool is a desktop app that displays your expenses in an easy-to-understand manner, segregated based on your needs. The data for this app is taken from the bank statements using Gmail API. The data is locally processed in the user's machine, ensuring data security. The data can either be displayed in the modern desktop-app or it can be seen as a consolidated Excel Sheet, giving the user option to choose. 

Expensator is made using Python and Electron. The python file is called through Javscript functions. 

The idea for this tool was original, as financial management was one of the difficults aspects of being a student. Making it open-source would ensure that many students like us would use it to manage their own finances.

# Timeline:

04-03-2023 -> Idea was fixed, and building of the product started. The Python functions were written by the end of the day.
05-03 - 2023 -> Electron was setup.

What is not running? A solution on the interval with which the python script is to be executed, was not determined. This need was desired due to the need of immediate updation of expenses. Now, both the parts work as separate parts, but will get the data correctly as the APIs are connected.
# How To Run

1) Clone the Repo
2) Install the necessary dependencies
3) Run "npm start". In a parellel terminal, run "npm run electron-dev" 
