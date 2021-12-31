const ZohoAuth = require("./../zoho/auth.zoho");

class People extends ZohoAuth {
    constructor(uniq_name,client_id, client_secret, refresh_token) {
        super(uniq_name,client_id, client_secret, refresh_token)
    }

    /**
     *
     * @param formName
     * @param sIndex start index
     * @param limit maximum 200
     * @returns {Promise<*>}
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

    /**
     *
     * @param formName
     * @returns {Promise<Array>}
     */
    async getFormsAllData(formName) {
        try {
            let result = [];
            let data = [];
            let sIndex = 1;
            result = await this.getForms(formName);
            data = [...result.response.result];
            while (result.response.result.length === 200) {
                sIndex += 200;
                result = await this.getForms(formName, sIndex);
                data.push(...result.response.result);
            }
            return data;
        }catch (e) {
            console.log(e);
        }
    }

    /**
     *
     * @param sdate MM/dd/YYYY
     * @param edate MM/dd/YYYY
     * @param employee_id optional
     * @returns {Promise<*>}
     */
    async getAttendanceReport(sdate,edate,employee_id=null){
        try {
            return await this.customRequest(`https://people.zoho.com/people/api/attendance/getUserReport`,"GET",{sdate,edate,employee_id});
        }catch (e) {
            if (e.response !== undefined)
                console.error(e.response.data);
            else
                console.error(e.message);
        }
    }

    /**
     *
     * @param formName
     * @param data Object
     * @param recordId
     * @returns {Promise<*>}
     */
    async updateForms(formName,data,recordId) {
        try {
            return await this.customRequest(`https://people.zoho.com/people/api/forms/json/${formName}/updateRecord?inputData=${JSON.stringify(data)}&recordId=${recordId}`, "POST");
        } catch (e) {
            if (e.response !== undefined)
                console.error(e.response.data);
            else
                console.error(e.message);
        }
    }

    /**
     *
     * @param employeeId
     * @returns {Promise<*>}
     */
    async getHolidays(employeeId) {
        try {
            return await this.customRequest(`https://people.zoho.com/people/api/leave/getHolidays`, "GET",{userId:employeeId});
        } catch (e) {
            if (e.response !== undefined)
                console.error(e.response.data);
            else
                console.error(e.message);
        }
    }

    /**
     * @param employeeId
     * @returns {Promise<*>}
     */
    async getLeavesType(employeeId) {
        try {
            return await this.customRequest(`https://people.zoho.com/people/api/leave/getLeaveTypeDetails`, "GET",{userId:employeeId});
        } catch (e) {
            if (e.response !== undefined)
                console.error(e.response.data);
            else
                console.error(e.message);
        }
    }

    /**
     * @param recordId
     * @returns {Promise<*>}
     */
    async fetchSingleLeave(recordId) {
        try {
            return await this.customRequest(`https://people.zoho.com/people/api/forms/leave/getDataByID?recordId=${recordId}`, "POST");
        } catch (e) {
            if (e.response !== undefined)
                console.error(e.response.data);
            else
                console.error(e.message);
        }
    }

    /**
     * @param employeeId
     * @param fromDate
     * @param endDate
     * @returns {Promise<*>}
     */
    async getEmployeeLeaves(employeeId,fromDate,endDate) {
        try {
            return await this.customRequest(`https://people.zoho.com/people/api/leave/getEmployeeLeaves?empErecNo=${employeeId}&fromDate=${fromDate}&endDate=${endDate}`, "POST");
        } catch (e) {
            if (e.response !== undefined)
                console.error(e.response.data);
            else
                console.error(e.message);
        }
    }

    /**
     * @param formName
     * @param data
     * @returns {Promise<*>}
     */
    async insertRecord(formName,data) {
        try {
            return await this.customRequest(`https://people.zoho.com/people/api/forms/json/${formName}/insertRecord?inputData=${JSON.stringify(data)}`, "POST");
        } catch (e) {
            if (e.response !== undefined)
                console.error(e.response.data);
            else
                console.error(e.message);
        }
    }

}

module.exports = People;
