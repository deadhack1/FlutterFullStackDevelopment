import express,{ Express,Request,Response } from "express";
import http from 'http';
import cors from 'cors';
import bodyParser from "body-parser";
import router from "./routes/routes";
const app:Express= express();
const server=http.createServer(app);

//Express configuration
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set("PORT",3000)
app.set("BASE_URL","localhost");

//defining the routes
app.use("/api/v1",router)

//Starting Server
try {
    const port:Number =app.get("PORT");
    const baseUrl:String =app.get("BASE_URL");
    server.listen(port,():void =>{
        console.log("Server is Listening");
    })
} catch (error) {
    console.log(error);
}