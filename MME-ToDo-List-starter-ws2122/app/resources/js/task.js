const NEW_TASK_TEXT = "New Task";

class Task{
    constructor(description = NEW_TASK_TEXT, id = Date.now().toString.trim(), status = false){
        this.description = description;
        this.id = id;
        this.status = status;


    }
}