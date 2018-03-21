<template>
  <section id="todoApp">
        <h1>todos</h1>
        <section class="todoBox">
            <div class="text">
                <div class="allCheck">
                    <label>
                        <input type="checkbox" value="" name="" v-on:click="selectAll">
                    </label>
                </div>
                <input class="newTodo" v-on:keyup.enter="write($event)" placeholder="What needs to be done?" autofocus="">
            </div>
            <ul class="todoList">
                <li v-for="(item,idx) in filteredTodos" :key="idx" v-show="filteredTodos.length>0" v-on:click="fnChecked($event,idx)">
                    <div class="view">
                        <input type="checkbox" v-bind:checked="item.isCheck">
                        <span v-bind:class="{ checked: item.isCheck }">{{ item.val }}</span>
                        <button class="destroy" v-on:click="fnDelete($event,idx)"></button>
                    </div>
                    <input type="text" v-model="item.val">
                </li>
            </ul>
        </section>
        <footer>
            <div>
                <strong>{{ myNum }}</strong>items left
            </div>
            <ul>
                <li v-on:click="fnAll">
                    <a href="javascript:;" :class="{selected: visibility == 'all'}">All</a>
                </li>
                <li v-on:click="fnActive">
                    <a href="javascript:;" :class="{selected: visibility == 'active'}">Active</a>
                </li>
                <li v-on:click="fnCompleted">
                    <a href="javascript:;" :class="{selected: visibility == 'completed'}">Completed</a>
                </li>
            </ul>
            <button v-on:click="clearData">Clear completed</button>
        </footer>
    </section>
</template>

<script>
var filters = {
  all: function (todos) {
    return todos
  },
  active: function (todos) {
    return todos.filter(function (todo) {
      return !todo.isCheck
    })
  },
  completed: function (todos) {
    return todos.filter(function (todo) {
      return todo.isCheck
    })
  }
}

export default {
  data () {
    return {
      isSelectAll: false,
      myData: [
        // {val:'',isCheck:false}
      ],
      visibility: 'all'
    }
  },
  methods: {
    write (ev) {
      let val = (ev.target.value).trim()
      if (val !== '') {
        this.myData.push({
          val: val,
          isCheck: false
        })
        ev.target.value = ''
      }
    },
    fnChecked (ev, index) {
      if (this.myData[index].isCheck) {
        this.myData[index].isCheck = false
      } else {
        this.myData[index].isCheck = true
      }
    },
    fnDelete (ev, index) {
      this.myData.splice(index, 1)
    },

    fnAll () {
      this.visibility = 'all'
    },
    fnActive () {
      this.visibility = 'active'
    },
    fnCompleted () {
      this.visibility = 'completed'
    },

    selectAll () {
      if (this.isSelectAll === false) {
        this.myData.forEach((ele, idx) => {
          ele.isCheck = true
        })
      } else {
        this.myData.forEach((ele, idx) => {
          ele.isCheck = false
        })
      }
      this.isSelectAll = !this.isSelectAll
    },
    clearData () {
      this.myData = []
    }
  },
  computed: {
    myNum () {
      let num = 0
      this.myData.filter((ele, idx) => {
        if (ele.isCheck === false) {
          num += 1
        }
      })
      return num
    },
    filteredTodos: function () {
      return filters[this.visibility](this.myData)
    }
  },
  watch: {

  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #444;
}
ul {
  list-style: none;
}
input:checked {
  outline: none;
}
body {
  width: 550px;
  margin: 0 auto;
  font-weight: 300;
  background: #f5f5f5;
}
#todoApp {
  margin-top: 150px;
  background: #fff;
  -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
    0 25px 50px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
}
h1 {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  font-size: 100px;
  font-weight: 100;
  text-align: center;
  color: rgba(175, 47, 47, 0.15);
}
.todoBox {
  position: relative;
  width: 550px;
  background: #fff;
  -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
    0 25px 50px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
}
.text {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 60px;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
}
.text > * {
  display: block;
}
.text .allCheck {
  position: relative;
  width: 40px;
  height: 100%;
}
.text .allCheck input {
  -webkit-appearance: none;
}
.text .allCheck input:after {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 22px;
  color: #e6e6e6;
  content: "❯";
  -webkit-transform: translate(-50%, -50%) rotate(90deg);
  transform: translate(-50%, -50%) rotate(90deg);
}
.text .newTodo {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 16px 16px 16px 0;
  border: 0;
  border: none;
  outline: none;
  line-height: 1.4em;
  font-weight: 100;
  color: #444;
  background: rgba(0, 0, 0, 0.003);
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
.text .newTodo,
.todoList li {
  position: relative;
  font-size: 24px;
}
.todoList li {
  height: 45px;
  border-bottom: 1px solid #ededed;
}
.todoList li .view {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: 100%;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.todoList li .view span {
  padding-left: 20px;
  font-size: 24px;
  font-weight: 100;
  color: #d9d9d9;
}
.todoList li .view span.checked {
  text-decoration: line-through;
}
.todoList li .view button {
  opacity: 0;
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  width: 40px;
  height: 40px;
  border: none;
  font-size: 30px;
  color: #cc9a9a;
  background: none;
  -webkit-transition: opacity 0.5s ease-out;
  transition: opacity 0.5s ease-out;
}
.todoList li .view button:after {
  content: "×";
}
.todoList li .view input[type="checkbox"] {
  width: 40px;
  height: 40px;
  -webkit-appearance: none;
}
.todoList li .view input[type="checkbox"]:after {
  display: block;
  width: 40px;
  height: 40px;
  content: url("../assets/todolist/checkbox1.svg");
}
.todoList li .view input[type="checkbox"]:checked:after {
  background: url("");
  content: url("../assets/todolist/checkbox2.svg");
}
.todoList li input[type="text"] {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: none;
  position: relative;
  width: 100%;
  margin: 0;
  padding: 6px;
  border: 0;
  border: 1px solid #999;
  outline: none;
  font-family: inherit;
  font-size: 24px;
  line-height: 1.4em;
  font-weight: inherit;
  color: inherit;
  -webkit-box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  -webkit-font-smoothing: antialiased;
}
.todoList li:hover button {
  opacity: 1;
}
footer {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 20px;
  padding: 10px 15px;
  border-top: 1px solid #e6e6e6;
  text-align: center;
  color: #777;
  background: #fff;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
footer:before {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 50px;
  overflow: hidden;
  content: "";
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
    0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,
    0 17px 2px -6px rgba(0, 0, 0, 0.2);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
    0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,
    0 17px 2px -6px rgba(0, 0, 0, 0.2);
}
footer > div > strong {
  font-weight: 100;
  padding-right: 5px;
}
footer ul {
  position: relative;
  z-index: 1;
}
footer ul li {
  display: inline;
}
footer ul li a {
  margin: 3px;
  padding: 3px 7px;
  border: 1px solid transparent;
  text-decoration: none;
  color: inherit;
  border-radius: 3px;
}
footer ul li a:hover {
  border-color: rgba(175, 47, 47, 0.1);
}
footer ul li a.selected {
  border-color: rgba(175, 47, 47, 0.2);
}
footer button {
  display: block;
  position: relative;
  line-height: 20px;
  text-decoration: none;
  cursor: pointer;
  border: none;
  background: none;
}
footer button:hover {
  text-decoration: underline;
}
</style>
