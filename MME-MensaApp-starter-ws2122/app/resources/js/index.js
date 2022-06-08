/* eslint-env browser */
import Config from "./data/DataConfig.js";
import {DownloadWorker, DownloadJob} from "./utils/downloadWorker.js";


function init() {
    console.log("#### Starting Mensa App ####");
    //fetchFunction();

    let worker = new DownloadWorker();
    worker.addEventListener("downloadFinished", onDownloadFinishes);
    worker.addJobs(Config.BASE_API_URL + "mo");
    worker.addJobs(Config.BASE_API_URL + "di");
    worker.addJobs(Config.BASE_API_URL + "mi");
    worker.addJobs(Config.BASE_API_URL + "do");
    worker.addJobs(Config.BASE_API_URL + "fr");
    worker.start();
}

function onDownloadFinishes(){
    console.log("Worker reports download is finished");
}

function fetchFunction(){

    fetch(Config.BASE_API_URL + "mo").then(
        function(response){
            console.log(response);
            return response.json();
        }
    ).then(function(results){
        console.log(results);
    })
}
init();