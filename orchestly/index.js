const ZohoAuth = require("./../zoho/auth.zoho");

class Orchestly extends ZohoAuth {
    constructor(_uniq_name,_client_id, _client_secret, _refresh_token) {
        super(_uniq_name,_client_id, _client_secret, _refresh_token)
    }

    async getAllJobs(org_id,parameters) {
        try {
            return await this.customRequest(`https://orchestlyapi.zoho.com/blueprint/api/${org_id}/job`, "GET",parameters);
        } catch (e) {
            if (e.response !== undefined)
                console.error(e.response.data);
            else
                console.error(e.message);
        }
    }

    async getJobsByDate(org_id,date,parameters) {
        try {
            let indexId = 0;
            parameters.range = 3;
            let selectedData = {}
            selectedData.job_list = [];
            let canContinue = true
            while(canContinue){
                parameters.index = indexId * parameters.range
                const data =  await this._getJobsByDate(org_id,date,parameters);
                for(let i = data.job_list.length -1 ;i>=0;i--){
                    const dataDate = data.job_list[i].modified_date;
                    if(dataDate === date )
                    {
                        selectedData.job_list.push(...data.job_list);
                        indexId++;
                        break;
                    }else
                    {
                        canContinue = false;
                        selectedData.job_list.push(...data.job_list.slice(0,i));
                    }
                }

            }

            return selectedData.job_list;
        } catch (e) {
            if (e.response !== undefined)
                console.error(e.response.data);
            else
                console.error(e.message);
        }
    }

    async _getJobsByDate(org_id,date,parameters) {
        try {
            const data =  await this.customRequest(`https://orchestlyapi.zoho.com/blueprint/api/${org_id}/job`, "GET",parameters);
            return data;
        } catch (e) {
            if (e.response !== undefined)
                console.error(e.response.data);
            else
                console.error(e.message);
        }
    }

    async getJobDetail(org_id,jobId,parameters) {
        try {
            return await this.customRequest(`https://orchestlyapi.zoho.com/blueprint/api/${org_id}/job/${jobId}`, "GET",parameters);
        } catch (e) {
            if (e.response !== undefined)
                console.error(e.response.data);
            else
                console.error(e.message);
        }
    }

    async getAllOfAllJobs(org_id,parameters) {
        try {
            let result = [];
            let data = [];
            let sIndex = 0;
            result = await this.getAllJobs(org_id,parameters);
            data = [...result.job_list];
            while (result.job_list.length === 100) {
                sIndex += 100;
                parameters.index = sIndex;
                result = await this.getAllJobs(org_id,parameters);
                data.push(...result.job_list);
            }
            return data;
        }catch (e) {
            console.log(e);
        }
    }

    async getAllReports(org_id) {
        try {
            return await this.customRequest(`https://orchestlyapi.zoho.com/blueprint/api/${org_id}/reports`, "GET");
        } catch (e) {
            if (e.response !== undefined)
                console.error(e.response.data);
            else
                console.error(e.message);
        }
    }

    async getReport(org_id,report_id) {
        try {
            return await this.customRequest(`https://orchestlyapi.zoho.com/blueprint/api/${org_id}/reports/${report_id}`, "GET");
        } catch (e) {
            if (e.response !== undefined)
                console.error(e.response.data);
            else
                console.error(e.message);
        }
    }

    async getAllLayout(org_id) {
        try {
            return await this.customRequest(`https://orchestlyapi.zoho.com/blueprint/api/${org_id}/layout`, "GET");
        } catch (e) {
            if (e.response !== undefined)
                console.error(e.response.data);
            else
                console.error(e.message);
        }
    }

    async getLayer(org_id,layout_id) {
        try {
            return await this.customRequest(`https://orchestlyapi.zoho.com/blueprint/api/${org_id}/layout/${layout_id}`, "GET");
        } catch (e) {
            if (e.response !== undefined)
                console.error(e.response.data);
            else
                console.error(e.message);
        }
    }

    async getAllCustomFields(org_id) {
        try {
            return await this.customRequest(`https://orchestlyapi.zoho.com/blueprint/api/${org_id}/customfield`, "GET");
        } catch (e) {
            if (e.response !== undefined)
                console.error(e.response.data);
            else
                console.error(e.message);
        }
    }

}

module.exports = Orchestly;
