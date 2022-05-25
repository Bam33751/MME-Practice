const TASK_VIEW_TEMPLATE = document.querySelector("#task-template").innerHTML.trim();

class TaskView{
    constructor(task){
        this.task = task;
        this.el = this.createTaskElement();

        this.inputField = this.el.querySelector(".task-text-input");
        this.inputField.value = this.task.description;

        this.statusBox = this.el.querySelector(".task-status-checkbox");
        this.statusBox.value = this.task.status;

        this.el.setAttribute("data-id", this.task.id);
    }

    createTaskElement(){
        let el = document.createElement("div");
        el.innerHTML = TASK_VIEW_TEMPLATE;
        return el.firstChild;
    }

    getElement(){
        return this.el;
    }
}


export default TaskView;