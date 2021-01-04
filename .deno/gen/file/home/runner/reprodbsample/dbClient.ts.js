import ky from 'https://deno.land/x/ky/index.js';
export class dbClient {
    constructor(apiUrl) {
        this.apiUrl = "";
        this.apiUrl = apiUrl;
    }
    async getData(getId) {
        const getUrl = `${this.apiUrl}/${encodeURIComponent(getId)}`;
        const response = await ky.get(getUrl, { headers: { 'content-type': 'text/plain	' } });
        if (response.ok) {
            const result = decodeURIComponent(await response.text());
            //      console.log(`get ok : [${getId}] : [${result}]`)
            return result;
        }
        else {
            //     console.log("get ng : [${getId}]")
            throw new Error(`Fetch error: ${response.statusText}`);
        }
    }
    async putData(putId, putData) {
        const setParams = `${encodeURIComponent(putId)}=${encodeURIComponent(putData)}`;
        const response = await ky.post(this.apiUrl, {
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            body: setParams
        });
        if (response.ok) {
            //      console.log(`put ok : [${setParams}]`)
            return response;
        }
        else {
            //      console.log(`put ng : [${setParams}]`)
            throw new Error(`Fetch error: ${response.statusText}`);
        }
    }
}
//# sourceMappingURL=file:///home/runner/reprodbsample/.deno/gen/file/home/runner/reprodbsample/dbClient.ts.js.map