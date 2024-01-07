import express from "express";
import { fileURLToPath } from "url";
import path from "path";
import http from "http";
import { Server } from "socket.io";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.resolve(__dirname)));

app.get("/", (req, res) => {
    return res.sendFile(path.resolve("index.html"));
});

server.listen(3001, () => {
    console.log("It's alive");
});