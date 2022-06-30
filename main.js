'use strict';
// HTMLより入力欄、追加ボタン、追加した内容を表示するためにIDを取得
const addTask = document.getElementById('addtask');
const submitButton = document.getElementById('submit');
const todoLists = document.getElementById('todolists');

// 追加するための空配列を定義
const todos = [];

// 出力の際のID定義
const todoId = 0;

// todosに格納するためのtodoを定義
const addTodo = () => {
  const idNum = todoId;
  const task = addTask.value;
  const status = '作業中';
  const todo = {
    idNum,
    task,
    status,
  };
  //  todoを返す
  // return todo;
};

// 追加ボタンがクリックされたら実行する処理を実装
submitButton.addEventListener('click', () => {
  const pushTodo = addTodo();
  todos.push(pushTodo);
  showTodos();
  // pushされた後に空の文字列を値に代入することで、タスク登録後インプットの中身が空になり、再び新しく登録できるようになる
  addTask.value = '';
});

// todosの中身を一覧表示させる
const showTodos = () => {
  
  todos.forEach((todo) => {
    const todoItem = document.createElement('tr');
    todoLists.appendChild(todoItem);
    const todoIdNam = document.createElement('th');
    const todoStatus = document.createElement('th');
    const todoAction = document.createElement('th');
// tr,tdタグを作成した後、innerHTMLでID、コメント、状態、削除ボタンを出力する
    todoIdNam.innerHTML = todo.idNum;

  });
}
