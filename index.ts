import { replitDbClient } from 'https://repl.it/@mediysato/reprodbsample#replitDbClient.ts'

const main = async () => {
  const apiUrl = Deno.env.get('REPLIT_DB_URL')
  if (apiUrl) {
    const db = new replitDbClient(apiUrl)

    // put
    const responsePut: Response = await db.putData("test2", "testdata testdata")

    // get
    const responseGet: string = await db.getData("test2")
    console.dir(responseGet)
  }
}
main()