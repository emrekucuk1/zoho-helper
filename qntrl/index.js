const ZohoAuth = require("./../zoho/auth.zoho");

class QNTRL extends ZohoAuth {
    constructor(_uniq_name,_client_id, _client_secret, _refresh_token) {
        super(_uniq_name,_client_id, _client_secret, _refresh_token)
    }

    /**
     *
     * @param org_id
     * @param parameters
     * @returns {Promise<any|undefined>}
     */
    async getAllJobs(org_id,parameters) {
        try {
            return await this.customRequest(`https://coreapi.qntrl.com/blueprint/api/${org_id}/job`, "GET",parameters);
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
     * @returns {Promise<any|undefined>}
     */
    async getAllReports(org_id) {
        try {
            return await this.customRequest(`https://coreapi.qntrl.com/blueprint/api/${org_id}/reports`, "GET");
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
     * @param report_id
     * @returns {Promise<any|undefined>}
     */
    async getReport(org_id,report_id) {
        try {
            return await this.customRequest(`https://coreapi.qntrl.com/blueprint/api/${org_id}/reports/${report_id}`, "GET");
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
     * @returns {Promise<any|undefined>}
     */
    async getAllLayout(org_id) {
        try {
            return await this.customRequest(`https://coreapi.qntrl.com/blueprint/api/${org_id}/layout`, "GET");
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
     * @param layout_id
     * @returns {Promise<any|undefined>}
     */
    async getLayer(org_id,layout_id) {
        try {
            return await this.customRequest(`https://coreapi.qntrl.com/blueprint/api/${org_id}/layout/${layout_id}`, "GET");
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
     * @returns {Promise<any|undefined>}
     */
    async createJob(org_id,parameters) {
        const token = await this.getToken();
        try {
            return await this.customRequest(`https://coreapi.qntrl.com/blueprint/api/${org_id}/job`, "POST",parameters);
        } catch (e) {
            if (e.response !== undefined)
                console.error(e.response.data);
            else
                console.error(e.message);
        }
    }

    // ########### Special API ###############

    /**
     *
     * @param org_id
     * @param title Mandatory
     * @param record_owner Assigne
     * @param description Text
     * @param layout_id Orchestly Link Id
     * @param customField due_date,link
     * @returns {Promise<*>}
     * Info: Request URL use encodeURI
     */
    async createRevInfoJOB(org_id,title,layout_id,project,currency,category,fwc,payee,amount,description1) {
        try {
            var out = encodeURI(`https://coreapi.qntrl.com/blueprint/api/${org_id}/job?title=${title}&layout_id=${layout_id}&customfield_dropdown20=${project}&customfield_dropdown11=${currency}&customfield_dropdown50=${category}&customfield_dropdown25=${fwc}&customfield_shorttext6=${payee}&customfield_decimal2=${amount}&description=${description1}`);
            console.log(out)
            return await this.customRequestRevo(out, "POST");
        } catch (e) {
            if (e.response !== undefined)
                console.error(e.response.data);
            else
                console.error(e.message);
        }
    }
}

module.exports = QNTRL;
