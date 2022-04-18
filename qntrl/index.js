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

    /**
     *
     * @param org_id
     * @param title
     * @param record_owner
     * @param layout_id
     * @param date_of_join
     * @param evaluated_name
     * @param department
     * @param employee_title
     * @param salary
     * @param link
     * @param manager
     * @param managerName
     * @returns {Promise<*|undefined>}
     */
    async createJobEmployee(org_id,title,record_owner,layout_id,date_of_join,evaluated_name,department,employee_title,salary,link,manager,managerName) {
        try {
            var out = encodeURI(`https://coreapi.qntrl.com/blueprint/api/${org_id}/job?title=${title}&record_owner=${record_owner}&layout_id=${layout_id}&customfield_shorttext95=${date_of_join}&customfield_shorttext94=${evaluated_name}&customfield_dropdown25=${department}&customfield_longtext6=${employee_title}&customfield_decimal2=${salary}&customfield_shorttext16=${link}&customfield_shorttext96=${manager}&customfield_shorttext63=${managerName}`);
            console.log(out)
            return await this.customRequestRevo(out, "POST");
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
     * @param title
     * @param record_owner
     * @param layout_id
     * @param description
     * @param hr_link
     * @returns {Promise<*|undefined>}
     */
    async createJobEmployeeHR(org_id,title,record_owner,layout_id,description,hr_link) {
        try {
            var out = encodeURI(`https://coreapi.qntrl.com/blueprint/api/${org_id}/job?title=${title}&record_owner=${record_owner}&layout_id=${layout_id}&description=${description}&customfield_shorttext66=${hr_link}&priority=6336000000000287`);
            console.log(out)
            return await this.customRequestRevo(out, "POST");
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
     * @param title
     * @param record_owner
     * @param layout_id
     * @param evaluated_name
     * @param department
     * @param employee_title
     * @param enddate
     * @param priotity
     * @returns {Promise<*|undefined>}
     */
    async createJobEmployeeWorkPermit(org_id,title,record_owner,layout_id,evaluated_name,department,employee_title,enddate,priotity) {
        try {
            var out = encodeURI(`https://coreapi.qntrl.com/blueprint/api/${org_id}/job?title=${title}&record_owner=${record_owner}&layout_id=${layout_id}&customfield_shorttext47=${enddate}&customfield_shorttext28=${evaluated_name}&customfield_shorttext97=${department}&customfield_shorttext15=${employee_title}&priority=${priotity}`);
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
