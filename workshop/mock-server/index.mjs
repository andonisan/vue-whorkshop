import mockServer from 'node-mock-server';
import { dirname, join } from "path"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url));


mockServer({
    restPath: join(__dirname, '/rest'),
    dirName: __dirname,
    urlBase: 'http://localhost:5005',
    port: 5005,
    urlPath: "",
    accessControlAllowHeaders: '*',
});
