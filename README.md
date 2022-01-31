# Zoho Helper NPM Package

Connecting To zoho services and manage most of the API's

## Features
* Handling oAuth
* Zoho People



## Installation

##### Using github
```bash
git clone https://github.com/emrekucuk1/zoho-helper.git
cd zoho-helper
npm install
```

##### Using package
* https://www.npmjs.com/package/zoho-helper

```
const People = require("zoho-helper").People;
const people = new People("APP_NAME","CLIENT_ID","CLIENT_SECRET","REFRESH_TOKEN");
```
if you are using this package for many tokens you should separate APP_NAME

#### Available Classes
* People
* CRM
* Orchestly
* Books


## Get zoho credential
* Read https://www.zoho.com/crm/developer/docs/api/v2/oauth-overview.html this article to retrieve Client ID and Client Secret.
```
const Zoho = require("zoho-helper").Zoho;
const zoho  = new Zoho(CLIENT_ID,CLIENT_SECRET,null);
zoho.initialize(["ZohoCRM.modules.ALL"],"http://github.com/redirect");
```
* In the console, you can see one link, Click on that and copy code from URL,
* Replace your code in curl CLI and run it.

#Zoho People Functions
* getForms(formName,sIndex=1,*limit=200)
  * *limit (maximum 200)
* getFormsAllData(formName)
* getAttendanceReport(sdate<MM/dd/YYYY>,edate<MM/dd/YYYY>,*employee_id)
  * employee_id null for all employees
* updateForms(formName,data\<Object>,recordId)
* getEmployeeLeaves(employeeId,fromDate<MM/dd/YYYY>,endDate<MM/dd/YYYY>)
* fetchSingleLeave(recordId)
* getLeavesType(employeeId)
* getHolidays(employeeId)
* insertRecord(formName,data\<Object>)

#Zoho Orchestly - Or QNTRL
* getAllJobs(org_id,parameters\<Object>)
* getAllOfAllJobs(org_id,parameters\<Object>)
* getAllReports(org_id)
* getReport(org_id,report_id)
* getAllLayout(org_id)
* getLayer(org_id,layout_id)
* getAllCustomFields(org_id)
* getJobDetail(org_id,job_id,parameters\<Object>)

#Zoho Books
* createBankAccount(org_id,parameters\<Object>)
* getCurrencies(org_id\<Object>)
* getOrganizationId(\<Object>)
* addTransaction(org_id,parameters\<Object>)
* addExpense(org_id,parameters\<Object>)
* getExpense(org_id\<Object>)
* getChartOfAccounts(org_id\<Object>)

#Zoho Functions
* removeToken
* fetchLastToken
* customRequest
* initialize

#Support
* Please don't forget to contact with me if you have any problem:

#Email
* emrekck.34@gmail.com && faraz.faraji@gmail.com

#Git Repo 
* https://github.com/emrekucuk1/zoho-helper
