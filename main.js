'use strict';
// HTMLより入力欄、追加ボタン、追加した内容を表示するためにIDを取得
const addTask = document.getElementById('addtask');
const submitButton = document.getElementById('submit');
const todoLists = document.getElementById('todolists');

// 追加するための空配列を定義
const todos = [];

// 追加ボタンがクリックされたら実行する処理を実装
submitButton.addEventListener('click', () => {
  todos.push({
    id: todos.length,
    comment: addTask.value,
    status: '作業中',
  });

  createListView();

  addTask.value = '';
});
// 削除ボタンが押されたらタスクが削除される処理を実行
const deleteButton = (taskid) =>{
  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '削除';
  deleteBtn.addEventListener('click',() => {
    todos.slice(taskid, 1);
    createListView(todos);
 };
};

const createListView = (todos) => {
  // todosLists直下に子要素がなくなるまで、子要素を削除し続ける処理
  while (todoLists.firstChild) {
    todoLists.removeChild(todoLists.firstChild);
  }
  todos.forEach((task, index) => {
    const todoItem = document.createElement('tr');
    const todoId = document.createElement('th');
    const todoComment = document.createElement('th');
    const todoStatus = document.createElement('th');
    const todoDelete = document.createElement('th');
    
    todoId.innerHTML = index + 1; //コールバック関数のインデックスからIDを取得させinnerHTMLで記述
    todoComment.innerHTML = task.comment; //コールバック関数の第一引数(task)からtodosの各値を取得させinnerHTMLで記述
    todoStatus.innerHTML = task.status;
    todoDelete.appendChild(deleteButton(index)); //インデックスの値を与えてあげる(taskid)の仮引数にtodos配列のインデックスをいれるイメ―ジ

    todoItem.appendChild(todoId);
    todoItem.appendChild(todoComment);
    todoItem.appendChild(todoStatus);
    todoItem.appendChild(todoDelete);

    todoLists.appendChild(todoItem);
  });
};
