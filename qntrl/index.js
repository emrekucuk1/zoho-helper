const ZohoAuth = require("./../zoho/auth.zoho");

class QNTRL extends ZohoAuth {
    constructor(_uniq_name,_client_id, _client_secret, _refresh_token) {
        super(_uniq_name,_client_id, _client_secret, _refresh_token)
    }

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
}

module.exports = QNTRL;
