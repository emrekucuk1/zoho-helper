const ZohoAuth = require("./../zoho/auth.zoho");

class Books extends ZohoAuth {
    constructor(_uniq_name,_client_id, _client_secret, _refresh_token) {
        super(_uniq_name,_client_id, _client_secret, _refresh_token)
    }

    /**
     *
     * @param org_id
     * @param parameters
     * @returns {Promise<*|undefined>}
     */
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

    /**
     *
     * @param org_id
     * @returns {Promise<*|undefined>}
     */
    async getCurrencies(org_id) {
        const token = await this.getToken();
        try {
            return await this.customRequestV2(`https://books.zoho.com/api/v3/settings/currencies?organization_id=${org_id}`, "GET");
        } catch (e) {
            if (e.response !== undefined)
                console.error(e.response.data);
            else
                console.error(e.message);
        }
    }

    /**
     *
     * @returns {Promise<*|undefined>}
     */
    async getOrganizationId() {
        const token = await this.getToken();
        try {
            return await this.customRequestV2(`https://books.zoho.com/api/v3/organizations`, "GET");
        } catch (e) {
            if (e.response !== undefined)
                console.error(e.response.data);
            else
                console.error(e.message);
        }
    }

    /**
     *
     * @param org_id
     * @param parameters
     * @returns {Promise<*|undefined>}
     */
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

    /**
     *
     * @param org_id
     * @param parameters
     * @returns {Promise<*|undefined>}
     */
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

    /**
     *
     * @param org_id
     * @returns {Promise<*|undefined>}
     */
    async getExpenses(org_id) {
        const token = await this.getToken();
        try {
            return await this.customRequestV2(`https://books.zoho.com/api/v3/expenses?organization_id=${org_id}`, "GET");
        } catch (e) {
            if (e.response !== undefined)
                console.error(e.response.data);
            else
                console.error(e.message);
        }
    }

    /**
     *
     * @param org_id
     * @returns {Promise<*|undefined>}
     */
    async getChartOfAccounts(org_id) {
        const token = await this.getToken();
        try {
            return await this.customRequestV2(`https://books.zoho.com/api/v3/chartofaccounts?organization_id=${org_id}`, "GET");
        } catch (e) {
            if (e.response !== undefined)
                console.error(e.response.data);
            else
                console.error(e.message);
        }
    }

    /**
     *
     * @param org_id
     * @returns {Promise<*|undefined>}
     */
    async getChartOfAccounts(org_id) {
        const token = await this.getToken();
        try {
            return await this.customRequestV2(`https://books.zoho.com/api/v3/chartofaccounts?organization_id=${org_id}`, "GET");
        } catch (e) {
            if (e.response !== undefined)
                console.error(e.response.data);
            else
                console.error(e.message);
        }
    }

    /**
     *
     * @param org_id
     * @returns {Promise<*|undefined>}
     */
    async getExpenseList(org_id) {
        const token = await this.getToken();
        try {
            return await this.customRequestV2(`https://books.zoho.com/api/v3/expenses?organization_id=${org_id}`, "GET");
        } catch (e) {
            if (e.response !== undefined)
                console.error(e.response.data);
            else
                console.error(e.message);
        }
    }

    /**
     *
     * @param org_id
     * @returns {Promise<*|undefined>}
     */
    async getCurrencies(org_id) {
        try {
            return await this.customRequestV2(`https://books.zoho.com/api/v3/settings/currencies?organization_id=${org_id}`, "GET");
        }catch (e) {
            if (e.response !== undefined)
                console.error(e.response.data);
            else
                console.error(e.message);
        }
    }

    /**
     *
     * @param org_id
     * @returns {Promise<*|undefined>}
     */
    async chartOfAccounts(org_id) {
        try {
            return await this.customRequestV2(`https://books.zoho.com/api/v3/chartofaccounts?organization_id=${org_id}`, "GET");
        }catch (e) {
            if (e.response !== undefined)
                console.error(e.response.data);
            else
                console.error(e.message);
        }
    }

    /**
     *
     * @param org_id
     * @returns {Promise<*|undefined>}
     */
    async getAllBankv2(org_id) {
        try {
            return await this.customRequestV2(`https://books.zoho.com/api/v3/bankaccounts?organization_id=${org_id}`, "GET");
        }catch (e) {
            if (e.response !== undefined)
                console.error(e.response.data);
            else
                console.error(e.message);
        }
    }

    /**
     *
     * @param org_id
     * @param parameters
     * @param transaction_id
     * @returns {Promise<*|undefined>}
     */
    async uncategorizeTransactions(org_id,parameters,transaction_id) {
        const token = await this.getToken();
        try {
            return await this.customRequestV5(`https://books.zoho.com/api/v3/banktransactions/${transaction_id}/uncategorize?organization_id=${org_id}`, "POST",parameters);
        } catch (e) {
            if (e.response !== undefined)
                console.error(e.response.data);
            else
                console.error(e.message);
        }
    }

    /**
     *
     * @param org_id
     * @returns {Promise<*|undefined>}
     */
    async getAllTransactions(org_id) {
        try {
            return await this.customRequestV2(`https://books.zoho.com/api/v3/banktransactions?organization_id=${org_id}`, "GET");
        }catch (e) {
            if (e.response !== undefined)
                console.error(e.response.data);
            else
                console.error(e.message);
        }
    }

    /**
     *
     * @param org_id
     * @param parameters
     * @returns {Promise<*|undefined>}
     */
    async addStatments(org_id,parameters) {
        const token = await this.getToken();
        try {
            return await this.customRequestV5(`https://books.zoho.com/api/v3/bankstatements?organization_id=${org_id}`, "POST",parameters);
        } catch (e) {
            if (e.response !== undefined)
                console.error(e.response.data);
            else
                console.error(e.message);
        }
    }

    /**
     *
     * @param org_id
     * @param parameters
     * @param transaction_id
     * @returns {Promise<*|undefined>}
     */
    async deleteTransactions(org_id,parameters,transaction_id) {
        const token = await this.getToken();
        try {
            return await this.customRequestV6(`https://books.zoho.com/api/v3/banktransactions/${transaction_id}?organization_id=${org_id}`, "DELETE",parameters);
        } catch (e) {
            if (e.response !== undefined)
                console.error(e.response.data);
            else
                console.error(e.message);
        }
    }

    /**
     *
     * @param org_id
     * @param parameters
     * @param transaction_id
     * @returns {Promise<*|undefined>}
     */
    async deleteTransactions(org_id,parameters,transaction_id) {
        const token = await this.getToken();
        try {
            return await this.customRequestV6(`https://books.zoho.com/api/v3/banktransactions/${transaction_id}?organization_id=${org_id}`, "DELETE",parameters);
        } catch (e) {
            if (e.response !== undefined)
                console.error(e.response.data);
            else
                console.error(e.message);
        }
    }

    /**
     *
     * @param org_id
     * @param parameters
     * @returns {Promise<*|undefined>}
     */
    async createBalance(org_id,parameters) {
        const token = await this.getToken();
        try {
            return await this.customRequestV6(`https://books.zoho.com/api/v3/settings/openingbalances?organization_id=${org_id}`, 'POST',parameters)
        }catch (e) {
            if (e.response !== undefined)
                console.log(e.response.data);
            else
                console.error(e.message)
        }
    }

    /**
     *
     * @param org_id
     * @param parameters
     * @returns {Promise<*|undefined>}
     */
    async deleteBalance(org_id,parameters) {
        const token = await this.getToken();
        try {
            return await this.customRequestV6(`https://books.zoho.com/api/v3/settings/openingbalances?organization_id=${org_id}`, 'DELETE',parameters)
        }catch (e) {
            if (e.response !== undefined)
                console.log(e.response.data);
            else
                console.error(e.message)
        }
    }

    /**
     *
     * @param org_id
     * @param parameters
     * @returns {Promise<*|undefined>}
     */
    async getBalance(org_id,parameters) {
        const token = await this.getToken();
        try {
            return await this.customRequestV6(`https://books.zoho.com/api/v3/settings/openingbalances?organization_id=${org_id}`, 'GET',parameters)
        }catch (e) {
            if (e.response !== undefined)
                console.log(e.response.data);
            else
                console.error(e.message)
        }
    }

    /**
     *
     * @param org_id
     * @param parameters
     * @returns {Promise<*|undefined>}
     */
    async updateBalance(org_id,parameters) {
        const token = await this.getToken();
        try {
            return await this.customRequestV6(`https://books.zoho.com/api/v3/settings/openingbalances?organization_id=${org_id}`, 'PUT',parameters)
        }catch (e) {
            if (e.response !== undefined)
                console.log(e.response.data);
            else
                console.error(e.message)
        }
    }

    /**
     *
     * @param org_id
     * @param parameters
     * @returns {Promise<*|undefined>}
     */
    async getTransactionList(org_id,parameters) {
        const token = await this.getToken();
        try {
            return await this.customRequestV6(`https://books.zoho.com/api/v3/settings/banktransactions?organization_id=${org_id}`, 'GET',parameters)
        }catch (e) {
            if (e.response !== undefined)
                console.log(e.response.data);
            else
                console.error(e.message)
        }
    }


}


module.exports = Books;
