const ZohoAuth = require("./../zoho/auth.zoho");

class Books extends ZohoAuth {
    constructor(_uniq_name,_client_id, _client_secret, _refresh_token) {
        super(_uniq_name,_client_id, _client_secret, _refresh_token)
    }

    async createBankAccount(org_id,parameters) {
        try {
            return await this.customRequest(`https://books.zoho.com/api/v3/bankaccounts?organization_id=${org_id}`, "POST",parameters);
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
            return await this.customRequest(`https://books.zoho.com/api/v3/settings/currencies?organization_id=${org_id}`, "GET");
        } catch (e) {
            if (e.response !== undefined)
                console.error(e.response.data);
            else
                console.error(e.message);
        }
    }

    async getOrganizationId() {
        const token = await this.getToken();
        try {
            return await this.customRequest(`https://books.zoho.com/api/v3/organizations`, "GET");
        } catch (e) {
            if (e.response !== undefined)
                console.error(e.response.data);
            else
                console.error(e.message);
        }
    }

    async addTransactions(org_id,parameters) {
        const token = await this.getToken();
        try {
            return await this.customRequest(`https://books.zoho.com/api/v3/banktransactions?organization_id=${org_id}`, "POST",parameters);
        } catch (e) {
            if (e.response !== undefined)
                console.error(e.response.data);
            else
                console.error(e.message);
        }
    }

    async addExpense(org_id,parameters) {
        const token = await this.getToken();
        try {
            return await this.customRequest(`https://books.zoho.com/api/v3/expenses?organization_id=${org_id}`, "POST",parameters);
        } catch (e) {
            if (e.response !== undefined)
                console.error(e.response.data);
            else
                console.error(e.message);
        }
    }

}


module.exports = Books;
