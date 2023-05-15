// import ConfigurationService from "./Services/ConfigurationService";
import express from 'express';
import Database from './Infrastructure/DBModels/Database'
// import fs from 'fs';
// import InfrastructureLibrary from "./Infrastructure/InfrastructureLibrary";
// import ApplicationLibrary from "./Application/ApplicationLibrary";
// import bodyParser from "body-parser";
// import Response from "./Application/Common/Response";
// import FileUploadService from "./Services/FileUploadService";
// import Authentication from "./Infrastructure/Authentication/Authentication";

const app = express();
const router = express.Router();



    // const configuration = new ConfigurationService("./configuration.json");
    // const fileService = new FileUploadService(configuration);
    // const port = configuration.getConfiguration("ServerPort");
    // const infrastructure = InfrastructureLibrary(configuration);
    // const application = ApplicationLibrary(
    //     infrastructure.Database, infrastructure.Authentication, 
    //     infrastructure.Identity, infrastructure.Mailer, fileService
    // );

    // app.use(bodyParser.urlencoded({ extended: false }));
    // app.use(bodyParser.json());

    /**
     * authentication will be checked here
     */


 
    console.log(Database.connectDb);

    app.use(async (req, res, next) => {

        //middle ware can be written here
        next();

    });

    app.get("/", async (req, res, next) => {
        res.json({
            statusCode: 200,
            message: "Wellcome to Retask REST API developed with node js, express using Clean Architecture Design patter."
        });
    });

    // fs.readdirSync("Controllers").forEach(function (file) {
    //     if (file.substr(-3) == ".ts") {
    //         const route = require("./Controllers/" + file);
    //         route.controller(app, application, infrastructure.Authentication);
    //     }
    // });

   

    app.listen(2000, function () {
        console.log(`api running on port 2000`);
    });

 module.exports = app;