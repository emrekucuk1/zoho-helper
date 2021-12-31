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

}

module.exports = Books;
