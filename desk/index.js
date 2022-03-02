const ZohoAuth = require("./../zoho/auth.zoho");

class Desk extends ZohoAuth {
    constructor(_uniq_name,_client_id, _client_secret, _refresh_token) {
        super(_uniq_name,_client_id, _client_secret, _refresh_token)
    }

    async getTickets(org_id) {
        try {
            return await this.customRequestV7(`https://desk.zoho.com/api/v1/tickets?include=contacts,assignee,departments,team,isRead`, "GET","",org_id);
        }catch (e) {
            if (e.response !== undefined)
                console.error(e.response.data);
            else
                console.error(e.message);
        }
    }


}


module.exports = Desk;
