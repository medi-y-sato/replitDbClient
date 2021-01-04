import { dbClient } from './dbClient.ts';
const main = async () => {
    const apiUrl = Deno.env.get('REPLIT_DB_URL');
    if (apiUrl) {
        const db = new dbClient(apiUrl);
        // put
        const responsePut = await db.putData("test2", "testdata testdata");
        // get
        const responseGet = await db.getData("test2");
        console.dir(responseGet);
    }
};
main();
//# sourceMappingURL=file:///home/runner/reprodbsample/.deno/gen/file/home/runner/reprodbsample/index.ts.js.map