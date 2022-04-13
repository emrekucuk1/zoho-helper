const ZohoAuth = require("./../zoho/auth.zoho");

class Desk extends ZohoAuth {
    constructor(_uniq_name,_client_id, _client_secret, _refresh_token) {
        super(_uniq_name,_client_id, _client_secret, _refresh_token)
    }

    async getOrg() {
        try {
            return await this.customRequestV6(`https://desk.zoho.com/api/v1/organizations`, "GET","");
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
     * @param agentId
     * @returns {Promise<*|undefined>}
     */
    async getAgent(org_id, agentId) {
        try {
            return await this.customRequestV7(`https://desk.zoho.com/api/v1/agents/${agentId}`, "GET", "",org_id);
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
     * @param from
     * @param limit
     * @returns {Promise<*|undefined>}
     */
    async getAllTickets(org_id,from,limit) {
        try {
            return await this.customRequestV7(`https://desk.zoho.com/api/v1/tickets`, "GET",{"from":from,"limit":limit},org_id);
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
     * @param from
     * @param limit
     * @param modifiedTimeRange
     * @returns {Promise<*|undefined>}
     */
    async searchTickets(org_id,from,limit,modifiedTimeRange) {
        try {
            return await this.customRequestV7(`https://desk.zoho.com/api/v1/tickets/search`,
                "GET",{"from":from,"limit":limit, "modifiedTimeRange":modifiedTimeRange},org_id);
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
     * @param ticketId
     * @returns {Promise<*|undefined>}
     */
    async getTicket(org_id,ticketId) {
        try {
            return await this.customRequestV7(`https://desk.zoho.com/api/v1/tickets/${ticketId}`, "GET","",org_id);
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
     * @param ticketId
     * @returns {Promise<*|undefined>}
     */
    async getTicketMetrics(org_id,ticketId) {
        try {
            return await this.customRequestV7(`https://desk.zoho.com/api/v1/tickets/${ticketId}/metrics`, "GET","",org_id);
        }catch (e) {
            if (e.response !== undefined)
                console.error(e.response.data);
            else
                console.error(e.message);
        }
    }


}


module.exports = Desk;
