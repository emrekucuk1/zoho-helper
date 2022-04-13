const ZohoAuth = require("./../zoho/auth.zoho");

class CRM extends ZohoAuth {
    constructor(uniq_name,client_id, client_secret, refresh_token) {
        super(uniq_name,client_id, client_secret, refresh_token)
    }

    /**
     *
     * @param formName
     * @param sIndex
     * @param limit
     * @returns {Promise<*|undefined>}
     */
    async getForms(formName,sIndex=1,limit=200) {
        try {
            return await this.customRequest(`https://people.zoho.com/people/api/forms/${formName}/getRecords?sIndex=${sIndex}&limit=${limit}`, "POST");
        } catch (e) {
            if (e.response !== undefined)
                console.error(e.response.data);
            else
                console.error(e.message);
        }
    }
}

module.exports = CRM;
