const inputEl = document.getElementById('input');
const form = document.getElementById('form');
const todosEl = document.getElementById('todos');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    addText(inputEl.value);
})

//  初期読み込み（保存されたTodoを復元）
loadTodos();

function addText(text, completed = false) {

    if (!text.trim()) return;
    const liEl = document.createElement("li");
    liEl.innerText = text;
    
    if (completed) {
        liEl.classList.add('completed');
    }
    todosEl.appendChild(liEl);

    inputEl.value = "";

    liEl.addEventListener('click', () => {
        liEl.classList.toggle('completed');
        saveTodos();
    })

    liEl.addEventListener('contextmenu', (event) => {
        event.preventDefault();

        liEl.remove();
        saveTodos();
    })
    saveTodos();
}

/*
 li を追加したときに localStorage に保存する
 削除したときも保存する
 ページ読み込み時に復元する
 */

function saveTodos() {
    const todos = [];

    document.querySelectorAll("li").forEach( liEl => {
        todos.push({
            text: liEl.innerText,
            completed: liEl.classList.contains("completed")
        })
    })

    localStorage.setItem("todosアプリ", JSON.stringify(todos));
}

function loadTodos() {
    const saved = JSON.parse(localStorage.getItem("todosアプリ"));

    if (saved) {
        saved.forEach(todo => {
            addText(todo.text, todo.completed);
        })
    }

}
