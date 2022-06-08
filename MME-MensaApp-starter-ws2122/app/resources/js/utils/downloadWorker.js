import {Observable, Event} from "./Observable.js";

function createDownloadPromise(job){
    return new Promise (function(resolve, reject){
        fetch(job).then(
            function(response){
                return response.json;
            }
        ).then (function(results){
            //console.log(results);
            resolve(results);
        })
    })

    /*
    return newPromise = new Promise(function(resolve, reject){
        console.log("Download Finished");
        setTimeout(function(){
            resolve();
        }, 3000)
    });*/


}


class DownloadJob{

    constructor(url){
        this.url = url;

        Object.freeze(this);
    }

}


class DownloadWorker extends Observable{

    constructor(){
        super();
        this.jobs = [];
    }


    addJobs(job){
        this.jobs.push(job);
    }

    start(){
        let promises = [];

        for ( let i = 0; i< this.jobs.length; i++){
            let promise = createDownloadPromise(this.jobs[i]);
            promises.push(promise);
        }

        let that = this;

        //Hier beginnt die Arbeit
        Promise.all(promises).then(function (){
            let event = new Event("downloadFinished", "Hallo");
            that.notifyAll(event);
        });
    }
}

export {DownloadJob, DownloadWorker};