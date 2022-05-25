import Task from "./task.js";
import TaskView from "./taskView.js";

var taskListEl;

function init(){
    console.log("Hello World");


    taskListEl = document.querySelector(".task-list");
    let task = new Task();
    let taskView = new TaskView(task);
    
    let el = taskView.getElement();
    console.log(el);
    taskListEl.append(el);

}

init();

