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

    async getAllTickets(org_id) {
        try {
            return await this.customRequestV7(`https://desk.zoho.com/api/v1/tickets`, "GET","",org_id);
        }catch (e) {
            if (e.response !== undefined)
                console.error(e.response.data);
            else
                console.error(e.message);
        }
    }

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


}


module.exports = Desk;
