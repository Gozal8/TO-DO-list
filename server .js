import {createServer} from 'http';
import {readFileSync} from 'fs';
import {config} from 'dotenv';
config();

const port = Number(process.env.PORT);
const host = process.env.HOST;

const server = createServer((req, res) => {
    if (req.method === 'GET') {
        const response = readFileSync('./data.json', 'utf-8');
        res.end(response);
    }
})

server.listen(port, host, (error) => {
    if (error){
        console.log(`Xatolik: ${Error}`)
    }else{
        console.log('Server is running on port', port)
    }
})


