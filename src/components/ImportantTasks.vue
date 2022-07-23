<template>
  <div class="task-box">
    <div class="title">
      <i class="fa fa-star" aria-hidden="true"></i>
      <h1>Important tasks</h1>
    </div>

    <div  v-for="task in myData" :key="task.id">
      <div class="task" v-if="task.isImportant">
        <button class="check" @click="isDone(task.id)">
          <i
            class="fa fa-check"
            :class="{ done: task.done }"
            aria-hidden="true"
          ></i>
        </button>
        <p :class="{ done: task.done }">{{ task.title }}</p>
        <button class="delete" @click="removeTask(task.id)">
          <i class="fa fa-trash" aria-hidden="true"></i>
          <i class="fa fa-trash-o" aria-hidden="true"></i>
        </button>
        <button class="Edit" @click="editTask(task.id)">
          <i class="fa fa-pencil-square" aria-hidden="true"></i>
          <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
        </button>
        <button class="important" @click="important(task.id)">
          <i
            class="fa fa-star-o"
            :class="{ isImp: task.isImportant }"
            aria-hidden="true"
          ></i>
          <i
            class="fa fa-star"
            :class="{ isImpor: task.isImportant, notimpor: !task.isImportant }"
            aria-hidden="true"
          ></i>
        </button>
      </div>
    </div>
  </div>

  <form @submit.prevent="addNew">
    <button type="submit"><i class="fa fa-plus" aria-hidden="true"></i></button>
    <input v-model="taskTitle" type="text" placeholder="Add tasks" />
    <select v-model="taskPersonal">
      <option value="Personal">Personal</option>
      <option value="Work">Work</option>
    </select>
  </form>
</template>

<script>
import JsonData from "../../data/main.json";
export default {
  data() {
    return {
      taskTitle: "",
      taskPersonal: "Personal",
      id: 1,
      isImportant: true,
      myData: JsonData,
    };
  },
  methods: {
    isDone(userid) {
      for (var i in this.myData) {
        if (this.myData[i].id == userid) {
          this.myData[i].done = !this.myData[i].done;
          break;
        }
      }
    },
    addNew() {
      this.myData.push({
        title: this.taskTitle,
        id: this.id++,
        done: false,
        personal: this.taskPersonal,
        isImportant: this.isImportant,
      });
      this.taskTitle = "";
      console.log(this.myData);
      const data = JSON.stringify(this.myData);
      window.localStorage.setItem("myData", data);
    },
    removeTask(taskId) {
      for (var i in this.myData) {
        if(this.myData[i].id == taskId){
          this.myData.splice(i,1)
          break;
        } 
      }
    },
    important(taskId){
        for(var i in this.myData){
            if(this.myData[i].id == taskId){
                this.myData[i].isImportant = !this.myData[i].isImportant;
                break;
            }  
        }
    },
    editTask(taskId){
      for(var i in this.myData){
            if(this.myData[i].id == taskId){
                this.taskTitle = this.myData[i].title;
                this.taskPersonal = this.myData[i].personal;
                this.id=this.myData[i].id;
                this.done=this.myData[i].isDone;
                this.isImportant=this.myData[i].isImportant;
                break;
            }  
        }
        for (var i in this.myData) {
        if(this.myData[i].id == taskId){
                this.myData.splice(i,1)
                break;
            } 
      }
    }
  },
};
</script>

<style>
.task-box {
  position: absolute;
  top: 50px;
  right: 5%;
  width: 70%;
  max-height: 600px;
}
.task-box .title {
  border-bottom: 1px solid #333;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.2rem;
  color: #333;
}
.task-box .title h1 {
  margin: 5px;
}
.task-box .title i {
  font-size: 24px;
}
.task-box .task {
  width: 100%;
  background: rgba(51, 51, 51, 0.7);
  padding: 7px 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 15px;
  border-radius: 14px;
}
.task-box .task button.check {
  height: 100%;
  width: 3%;
  background-color: transparent;
  border: 2px solid #bbb;
  border-radius: 50%;
  padding: 5px;
  color: #bbb;
  cursor: pointer;
}
.task-box .task button.check:hover i {
  visibility: visible;
}
.task-box .task button.check i {
  visibility: hidden;
}
.task-box .task p {
  width: 85%;
  color: #ccc;
}
.task-box .task > i {
  font-size: 1.2rem;
  margin-left: 10px;
  color: #bbb;
}
/* fa-trash-o
fa-star-o */
button.delete,
button.important,
button.Edit
{
  background-color: transparent;
  color: #ccc;
  border: 0;
  font-size: 1.4rem;
  cursor: pointer;
}
button.delete i.fa-trash {
  display: none;
}
button.delete:hover i.fa-trash {
  display: block;
}
button.delete:hover i.fa-trash-o {
  display: none;
}
button.Edit i.fa-pencil-square{
  display: none;
}
button.Edit:hover i.fa-pencil-square-o{
  display: none;
}
button.Edit:hover i.fa-pencil-square{
  display: block;
}
button.important i.fa-star {
}
button.important:hover i.fa-star {
  display: block;
}
button.important:hover i.fa-star-o {
  display: none;
}
i.isImp {
  display: none;
}
i.isImpor {
  display: block;
}
i.notimpor {
  display: none;
}
/*  */
p.done {
  text-decoration: line-through;
}
i.done {
  visibility: visible !important;
}
form {
  position: absolute;
  bottom: 50px;
  right: 5%;
  background-color: #444;
  width: 70%;
  display: flex;
  height: 45px;
  padding: 5px 0px;
  border-radius: 4px;
}
form button {
  background-color: transparent;
  border: 2px solid #ccc;
  border-radius: 50%;
  padding: 7px 10px;
  margin: 5px 10px;
  cursor: pointer;
  color: #ccc;
  transition: 0.3s;
}
form button:hover {
  background: #333;
  color: #aaa;
  border: 2px solid #aaa;
}
form select {
  width: 10%;
  background-color: transparent;
  color: #ccc;
  border: 0;
  padding-left: 15px;
}
form select:focus {
  border: 0;
  outline: 0;
}
form select option {
  background-color: #444;
  border-radius: 0px;
  border: 0;
}
form input {
  width: 83%;
  background-color: transparent;
  border: 0;
  color: #ccc;
}
form input:focus {
  border: 0;
  outline: 0;
}
</style>