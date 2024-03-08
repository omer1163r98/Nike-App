import express from "express";
import {mongoose} from 'mongoose';
import cors from 'cors';


const server = () => {



const app = express();

app.use(express.json());

app.use(cors())



app.listen(5175, () => console.log('app is listening to port: ' + 5175))



.catch((error) => {
    console.log(error)
})

}

