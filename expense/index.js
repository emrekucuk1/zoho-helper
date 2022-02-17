const ZohoAuth = require("./../zoho/auth.zoho");

class Expense extends ZohoAuth {
    constructor(_uniq_name,_client_id, _client_secret, _refresh_token) {
        super(_uniq_name,_client_id, _client_secret, _refresh_token)
    }

    async listOfExpense(org_id) {
        const token = await this.getToken();
        try {
            return await this.customRequestV4(`https://expense.zoho.com/api/v1/expensecategories`, "GET", org_id);
        } catch (e) {
            if (e.response !== undefined)
                console.error(e.response.data);
            else
                console.error(e.message);
        }
    }

    async createExpense(org_id,parameters) {
        const token = await this.getToken();
        try {
            return await this.customRequestV3(`https://expense.zoho.com/api/v1/expenses`, "POST", parameters);
        } catch (e) {
            if (e.response !== undefined)
                console.error(e.response.data);
            else
                console.error(e.message);
        }
    }

    async listOfProjects(org_id) {
        const token = await this.getToken();
        try {
            return await this.customRequestV4(`https://expense.zoho.com/api/v1/projects`, "GET", org_id);
        } catch (e) {
            if (e.response !== undefined)
                console.error(e.response.data);
            else
                console.error(e.message);
        }
    }

    async getCurrencies(org_id) {
        const token = await this.getToken();
        try {
            return await this.customRequestV4(`https://expense.zoho.com/api/v1/settings/currencies`, "GET", org_id);
        } catch (e) {
            if (e.response !== undefined)
                console.error(e.response.data);
            else
                console.error(e.message);
        }
    }

    async expenseReports(org_id,parameters){
        const token = await this.getToken();
        try {
            return await this.customRequestV3(`https://expense.zoho.com/api/v1/expensereports`, "POST", parameters, org_id);
        } catch (e) {
            if (e.response !== undefined)
                console.error(e.response.data);
            else
                console.error(e.message);
        }
    }

    async approveReports(org_id,parameters,expense_report_id){
        const token = await this.getToken();
        try {
            return await this.customRequestV3(`https://expense.zoho.com/api/v1/expensereports/${expense_report_id}/approve`, "POST", parameters, org_id);
        } catch (e) {
            if (e.response !== undefined)
                console.error(e.response.data);
            else
                console.error(e.message);
        }
    }



}


module.exports = Expense;
