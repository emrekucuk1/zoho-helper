const fs = require("fs");
const randomString = require('randomstring');
const request = require('request');
const axios = require("axios");

class ZohoAuthentication {
    constructor(uniq_name,client_id, client_secret, refresh_token) {
        this.client_id = client_id;
        this.client_secret = client_secret;
        this.refresh_token = refresh_token;
        this.uniq_name = uniq_name;
        this.token = null;
    }

    async removeToken(){
        if(fs.existsSync(`${__dirname}/token${this.uniq_name}.zoho`))
            fs.unlinkSync(`${__dirname}/token${this.uniq_name}.zoho`);
    }
    async fetchLastToken(){
        if(fs.existsSync(`${__dirname}/token${this.uniq_name}.zoho`))
            return await fs.readFileSync(`${__dirname}/token${this.uniq_name}.zoho`,"UTF-8");
        return null;
    }

    async getToken() {
        if(this.token===null){
            let _token = null;
            if(fs.existsSync(`${__dirname}/token${this.uniq_name}.zoho`))
            {
                this.token = await fs.readFileSync(`${__dirname}/token${this.uniq_name}.zoho`,"UTF-8");
            }else
            {
                _token = await this.generateToken();
                _token = _token.access_token;
                await fs.writeFileSync(`${__dirname}/token${this.uniq_name}.zoho`,_token);
                this.token = _token;
            }
        }
        return this.token;
    }

    async generateToken() {
        const client_id = this.client_id;
        const client_secret = this.client_secret;
        const refresh_token = this.refresh_token;

        return new Promise(function (resolve, reject) {
            request({
                url: 'https://accounts.zoho.com/oauth/v2/token',
                method: 'POST',
                form: {
                    grant_type: 'refresh_token',
                    client_id: client_id,
                    client_secret: client_secret,
                    refresh_token: refresh_token,
                }
            }, (error, response, body) => {
                if (error) {
                    console.log(error);
                } else {
                    resolve(JSON.parse(response.body));
                }
            });
        })
    }

    /**
     *
     * @param url
     * @param method
     * @param parameters
     * @returns {Promise<any|undefined>}
     */
    async customRequest(url, method, parameters) {
        if(!["GET","POST","PUT"].includes(method.toString().toUpperCase()))
            throw new Error("method is not included");
        const token = await this.getToken();
        let config = {};
        if(method.toString().toLowerCase()==="get"){
            let params = [];
            for(let parameter in parameters){
                if (parameters.hasOwnProperty(parameter)) {
                    if(parameters[parameter]===undefined)
                        continue;
                    params.push(encodeURI(parameter) + "=" + encodeURI(parameters[parameter]));
                }
            }
            config.url = url + "?" +  params.join("&");
        }else
        {
            config.url = url;
            if(parameters){
                config.data = parameters;
            }
        }

        config.method = method.toString().toLowerCase();
        config.headers = {
            'content-type': 'application/json',
            'Authorization': `Zoho-oauthtoken ${token}`,
        };

        try {
            const response = await axios(config);
            return response.data;
        } catch (e) {
            if(e.response.status===401)
            {
                if(fs.existsSync(`${__dirname}/token${this.uniq_name}.zoho`))
                    fs.unlinkSync(`${__dirname}/token${this.uniq_name}.zoho`);
                this.token=null;
                return this.customRequest(url,method,parameters);
            }else
                console.error(e.response.data);
        }
    }

    /**
     *
     * @param url
     * @param method
     * @param parameters
     * @returns {Promise<*|undefined>}
     */
    async customRequestV2(url, method, parameters) {
        if(!["GET","POST","PUT"].includes(method.toString().toUpperCase()))
            throw new Error("method is not included");
        const token = await this.getToken();
        let config = {};
        if(method.toString().toLowerCase()==="x"){
            let params = [];
            for(let parameter in parameters){
                if (parameters.hasOwnProperty(parameter)) {
                    if(parameters[parameter]===undefined)
                        continue;
                    params.push(encodeURI(parameter) + "=" + encodeURI(parameters[parameter]));
                }
            }
            config.url = url + "?" +  params.join("&");
        }else
        {
            config.url = url;
            if(parameters){
                config.data = parameters;
            }
        }

        config.method = method.toString().toLowerCase();
        config.headers = {
            'content-type': 'application/json;charset=UTF-8',
            'Authorization': `Zoho-oauthtoken ${token}`,
        };

        try {
            const response = await axios(config);
            return response.data;
        } catch (e) {
            if(e.response.status===401)
            {
                if(fs.existsSync(`${__dirname}/token${this.uniq_name}.zoho`))
                    fs.unlinkSync(`${__dirname}/token${this.uniq_name}.zoho`);
                this.token=null;
                return this.customRequest(url,method,parameters);
            }else
                console.error(e.response.data);
        }
    }

    /**
     *
     * @param url
     * @param method
     * @param parameters
     * @param organizationId
     * @returns {Promise<*|undefined>}
     */
    async customRequestV3(url, method, parameters, organizationId) {
        if(!["GET","POST","PUT"].includes(method.toString().toUpperCase()))
            throw new Error("method is not included");
        const token = await this.getToken();
        let config = {};
        if(method.toString().toLowerCase()==="x"){
            let params = [];
            for(let parameter in parameters){
                if (parameters.hasOwnProperty(parameter)) {
                    if(parameters[parameter]===undefined)
                        continue;
                    params.push(encodeURI(parameter) + "=" + encodeURI(parameters[parameter]));
                }
            }
            config.url = url + "?" +  params.join("&");
        }else
        {
            config.url = url;
            if(parameters){
                config.data = parameters;
            }
        }

        config.method = method.toString().toLowerCase();
        config.headers = {
            'content-type': 'application/json;charset=UTF-8',
            'Authorization': `Zoho-oauthtoken ${token}`,
            'X-com-zoho-expense-organizationid': `${organizationId}`
        };

        try {
            const response = await axios(config);
            return response.data;
        } catch (e) {
            if(e.response.status===401)
            {
                if(fs.existsSync(`${__dirname}/token${this.uniq_name}.zoho`))
                    fs.unlinkSync(`${__dirname}/token${this.uniq_name}.zoho`);
                this.token=null;
                return this.customRequest(url,method,parameters);
            }else
                console.error(e.response.data);
        }
    }

    /**
     *
     * @param url
     * @param method
     * @param organizationId
     * @param parameters
     * @returns {Promise<*|undefined>}
     */
    async customRequestV4(url, method, organizationId, parameters) {
        if(!["GET","POST","PUT"].includes(method.toString().toUpperCase()))
            throw new Error("method is not included");
        const token = await this.getToken();
        let config = {};
        if(method.toString().toLowerCase()==="x"){
            let params = [];
            for(let parameter in parameters){
                if (parameters.hasOwnProperty(parameter)) {
                    if(parameters[parameter]===undefined)
                        continue;
                    params.push(encodeURI(parameter) + "=" + encodeURI(parameters[parameter]));
                }
            }
            config.url = url + "?" +  params.join("&");
        }else
        {
            config.url = url;
            if(parameters){
                config.data = parameters;
            }
        }

        config.method = method.toString().toLowerCase();
        config.headers = {
            'content-type': 'application/json;charset=UTF-8',
            'Authorization': `Zoho-oauthtoken ${token}`,
            'X-com-zoho-expense-organizationid': `${organizationId}`
        };

        try {
            const response = await axios(config);
            return response.data;
        } catch (e) {
            if(e.response.status===401)
            {
                if(fs.existsSync(`${__dirname}/token${this.uniq_name}.zoho`))
                    fs.unlinkSync(`${__dirname}/token${this.uniq_name}.zoho`);
                this.token=null;
                return this.customRequest(url,method,parameters);
            }else
                console.error(e.response.data);
        }
    }

    /**
     *
     * @param url
     * @param method
     * @param parameters
     * @returns {Promise<*|undefined>}
     */
    async customRequestV5(url, method, parameters) {
        if(!["GET","POST","PUT"].includes(method.toString().toUpperCase()))
            throw new Error("method is not included");
        const token = await this.getToken();
        let config = {};
        if(method.toString().toLowerCase()==="x"){
            let params = [];
            for(let parameter in parameters){
                if (parameters.hasOwnProperty(parameter)) {
                    if(parameters[parameter]===undefined)
                        continue;
                    params.push(encodeURI(parameter) + "=" + encodeURI(parameters[parameter]));
                }
            }
            config.url = url + "?" +  params.join("&");
        }else
        {
            config.url = url;
            if(parameters){
                config.data = parameters;
            }
        }

        config.method = method.toString().toLowerCase();
        config.headers = {
            'content-type': 'application/json;charset=UTF-8',
            'Authorization': `Zoho-oauthtoken ${token}`,
        };

        try {
            const response = await axios(config);
            return response.data;
        } catch (e) {
            if(e.response.status===401)
            {
                if(fs.existsSync(`${__dirname}/token${this.uniq_name}.zoho`))
                    fs.unlinkSync(`${__dirname}/token${this.uniq_name}.zoho`);
                this.token=null;
                return this.customRequest(url,method,parameters);
            }else
                console.error(e.response.data);
        }
    }

    /**
     *
     * @param url
     * @param method
     * @param parameters
     * @returns {Promise<*|undefined>}
     */
    async customRequestV6(url, method, parameters) {
        if(!["GET","POST","PUT","DELETE"].includes(method.toString().toUpperCase()))
            throw new Error("method is not included");
        const token = await this.getToken();
        let config = {};
        if(method.toString().toLowerCase()==="x"){
            let params = [];
            for(let parameter in parameters){
                if (parameters.hasOwnProperty(parameter)) {
                    if(parameters[parameter]===undefined)
                        continue;
                    params.push(encodeURI(parameter) + "=" + encodeURI(parameters[parameter]));
                }
            }
            config.url = url + "?" +  params.join("&");
        }else
        {
            config.url = url;
            if(parameters){
                config.data = parameters;
            }
        }

        config.method = method.toString().toLowerCase();
        config.headers = {
            'content-type': 'application/json;charset=UTF-8',
            'Authorization': `Zoho-oauthtoken ${token}`,
        };

        try {
            const response = await axios(config);
            return response.data;
        } catch (e) {
            if(e.response.status===401)
            {
                if(fs.existsSync(`${__dirname}/token${this.uniq_name}.zoho`))
                    fs.unlinkSync(`${__dirname}/token${this.uniq_name}.zoho`);
                this.token=null;
                return this.customRequest(url,method,parameters);
            }else
                console.error(e.response.data);
        }
    }

    /**
     *
     * @param url
     * @param method
     * @param parameters
     * @param organizationId
     * @returns {Promise<*|undefined>}
     */
    async customRequestV7(url, method, parameters, organizationId) {
        if(!["GET","POST","PUT"].includes(method.toString().toUpperCase()))
            throw new Error("method is not included");
        const token = await this.getToken();
        let config = {};
        //console.log(method.toString().toLowerCase());
        if(method.toString().toLowerCase()==="get"){
            let params = [];
            for(let parameter in parameters){
                if (parameters.hasOwnProperty(parameter)) {
                    if(parameters[parameter]===undefined)
                        continue;
                    params.push(encodeURI(parameter) + "=" + encodeURI(parameters[parameter]));
                }
            }
            config.url = url + "?" +  params.join("&");

        }else
        {
            config.url = url;
            if(parameters){
                config.data = parameters;
            }
        }

        config.method = method.toString().toLowerCase();
        config.headers = {
            'orgId': `${organizationId}`,
            'Authorization': `Zoho-oauthtoken ${token}`
        };

        try {
            const response = await axios(config);
            return response.data;
        } catch (e) {
            if(e.response.status===401)
            {
                if(fs.existsSync(`${__dirname}/token${this.uniq_name}.zoho`))
                    fs.unlinkSync(`${__dirname}/token${this.uniq_name}.zoho`);
                this.token=null;
                return this.customRequest(url,method,parameters);
            }else
                console.error(e.response.data);
        }
    }

    /**
     *
     * @param url
     * @param method
     * @param parameters
     * @returns {Promise<*|undefined>}
     */
    async customRequestRevo(url, method, parameters) {
        console.log(url, method, parameters)
        if(!["GET","POST","PUT"].includes(method.toString().toUpperCase()))
            throw new Error("method is not included");
        const token = await this.getToken();
        let config = {};
        if(method.toString().toLowerCase()==="get"){
            let params = [];
            for(let parameter in parameters){
                if (parameters.hasOwnProperty(parameter)) {
                    if(parameters[parameter]===undefined)
                        continue;
                    params.push(encodeURI(parameter) + "=" + encodeURI(parameters[parameter]));
                }
            }
            config.url = url + "?" +  params.join("&");
        }else
        {
            config.url = url;
            if(parameters){
                config.data = parameters;
            }
        }

        config.method = method.toString().toLowerCase();
        config.headers = {
            'Authorization': `Zoho-oauthtoken ${token}`,
        };

        try {
            const response = await axios(config);
            return response.data;
        } catch (e) {
            if(e.response.status===401)
            {
                if(fs.existsSync(`${__dirname}/token${this.uniq_name}.zoho`))
                    fs.unlinkSync(`${__dirname}/token${this.uniq_name}.zoho`);
                this.token=null;
                return this.customRequest(url,method,parameters);
            }else
                console.error(e.response.data);
        }
    }

    /**
     *
     * @param scopes Array
     * @param redirect_url String
     * @returns {void}
     */
    initialize(scopes,redirect_url){
        scopes = scopes.join(",");
        console.log(`Open: https://accounts.zoho.com/oauth/v2/auth?response_type=code&access_type=offline&client_id=${this.client_id}&scope=${scopes}&redirect_uri=${redirect_url}`);
        console.log("");
        console.log("");
        console.log("");
        console.log(`curl --location --request POST 'https://accounts.zoho.com/oauth/v2/token' \\
--header 'Content-Type: application/x-www-form-urlencoded' \\
--data-urlencode 'code=REPLACE_CODE' \\
--data-urlencode 'client_id=${this.client_id}' \\
--data-urlencode 'client_secret=${this.client_secret}' \\
--data-urlencode 'redirect_uri=${redirect_url}' \\
--data-urlencode 'grant_type=authorization_code'`);
        console.log("");
        console.log("");
        console.log("");
    }

}

module.exports = ZohoAuthentication;
