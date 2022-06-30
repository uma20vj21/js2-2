'use strict';
// HTMLより入力欄、追加ボタン、追加した内容を表示するためにIDを取得
const addTask = document.getElementById('addtask');
const submitButton = document.getElementById('submit');
const todoLists = document.getElementById('todolists');

// 追加するための空配列を定義
let todos = [];

// 追加ボタンがクリックされたら実行する処理を実装
submitButton.addEventListener('click', () => {
  const taskStatus = '作業中';
  todos.push({
    id: todos.length,
    comment: addTask.value,
    status: taskStatus,
  });

  createListView();

  addTask.value = '';
});

const createListView = () => {
  // todosLists直下に子要素がなくなるまで、子要素を削除し続ける処理
  while (todoLists.firstChild) {
    todoLists.removeChild(todoLists.firstChild);
  }
  todos.forEach((task) => {
    let todoItem = document.createElement('tr');
    const todoId = document.createElement('th');
    const todoComment = document.createElement('th');
    const todoStatus = document.createElement('th');
    const todoDelete = document.createElement('th');
    const deleteButton = document.createElement('button');

    todoId.innerHTML = task.id;  //コールバック関数の第一引数(task)からtodosの各値を取得させinnerHTMLで記述
    todoComment.innerHTML = task.comment;  //コールバック関数の第一引数(task)からtodosの各値を取得させinnerHTMLで記述
    todoStatus.innerHTML = task.status;
    deleteButton.innerHTML = '削除';
    deleteButton.classList.add('delete');  //要素に'delete'クラスを付与
    todoDelete.appendChild(deleteButton); //上記で新しく'delete'クラスをつくりth要素に差し込む

    todoItem.appendChild(todoId);
    todoItem.appendChild(todoComment);
    todoItem.appendChild(todoStatus);
    todoItem.appendChild(todoDelete);

    todoLists.appendChild(todoItem);
  });
};
