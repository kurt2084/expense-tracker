# expense-tracker
Description:
V1: This app provides the function to create, show, update and delete expense records.

Feature:
1.See information about expense records on home page like name, category, date and amount.
2.Click "新增支出" button to crate a new expense record.
3.Click "修改" button to edit information the record.
4.Click "刪除" button to delete one record.
5.Click "類別" drop-down menu show all category and select one then click "查詢" button to see the category information.

How to use:
All steps use terminal
1.Downloal this project.
  git clone https://github.com/kurt2084/expense-tracker.git
2.cd expense-tracker
  cd expense-tracker
3.Install npm packages
  npm install
4.Create default seed
  npm run seed
5.Start services
  npm run start
6.Open browser and type http://localhost:3000

Dependencies:
body-parser: 1.19.0
express: 4.17.1
express-handlebars: 5.3.3
method-override: 3.0.0
moment: 2.29.1
mongoose: 6.0.3
