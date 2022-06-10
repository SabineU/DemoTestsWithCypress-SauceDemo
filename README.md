##                        Welcome to the Web Automation Assessment 

This Web Automation Assessment is about automating a web site (https://www.saucedemo.com/) using Playwright Test Automation tool with TypeScript language and Allure for reporting

## Setup
Once this repository is cloned into a local folder:
1. Open the terminal or command prompt and enter into the cloned folder/repo
2. Run the command `npm install` to install all dependancies 

## How to run
|ID|Description| Command |
| :---: | :--- | :--- |
|1|Run all tests in headless mode|`npm test` or `npx cypress run`|
|2|Run all tests in headed mode|`npx cypress open`|
|3|Generate allure report|`npm run allure:report` or `allure generate ./allure-results --clean`|
|4|Open report|`npm run openReport` or `allure open ./allure-report`|

  
## Tests coverage
|ID|Description| Command |
| :---: | :--- | :--- |
|1|Validation 1|1. Log in as a `standard user`<br>2. Find an item by name, then add it to the cart<br>3. Find a second item by name, and add it to the cart as well<br>4. Go to the cart<br>5. Find an item by name, then remove it from the cart<br>6.a. Validate in the Checkout Overview that: It only contains the items that you want to purchase<br>6.b. Validate in the Checkout Overview that: The Item Total is right<br>7. Finish the purchase<br> 8. Validate that the website confirms the order
