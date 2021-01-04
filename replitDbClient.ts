import ky from 'https://deno.land/x/ky/index.js'

export class replitDbClient {
  apiUrl: String = ""

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  async getData(getId: string): Promise<string> {
    const getUrl: string = `${this.apiUrl}/${encodeURIComponent(getId)}`
    const response: Response = await ky.get(getUrl, { headers: { 'content-type': 'text/plain	' } })
    if (response.ok) {
      const result: string = decodeURIComponent(await response.text())
      //      console.log(`get ok : [${getId}] : [${result}]`)
      return result

    } else {
      //     console.log("get ng : [${getId}]")
      throw new Error(`Fetch error: ${response.statusText}`);
    }
  }

  async putData(putId: string, putData: string): Promise<Response> {
    const setParams: string = `${encodeURIComponent(putId)}=${encodeURIComponent(putData)}`

    const response: Response = await ky.post(this.apiUrl, {
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      body: setParams
    })
    if (response.ok) {
      //      console.log(`put ok : [${setParams}]`)
      return response
    } else {
      //      console.log(`put ng : [${setParams}]`)
      throw new Error(`Fetch error: ${response.statusText}`);
    }
  }
}

