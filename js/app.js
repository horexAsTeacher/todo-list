// const todoForm = document.querySelector(".todoForm");
// const todosContainer = document.querySelector(".todos");
// let todos = JSON.parse(localStorage.getItem("todos")) || [];

// todoForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const newTodo = {
//     title: e.target.title.value,
//     isFinished: false,
//     id: generateUUID(),
//   };

//   todos.push(newTodo);
//   saveTodos();
//   updateUI();
//   todoForm.reset();
// });

// function updateUI() {
//   todosContainer.innerHTML = "";

//   todos.forEach((todo) => {
//     const todoItem = createTodoElement(todo);
//     todosContainer.appendChild(todoItem);
//   });
// }

// function createTodoElement(todo) {
//   const div = document.createElement("div");
//   div.classList.add(
//     "todo",
//     "w-full",
//     "bg-green-100",
//     "h-[80px]",
//     "rounded-xl",
//     "flex",
//     "items-center",
//     "justify-between",
//     "p-3",
//     "mt-3"
//   );
//   div.setAttribute("data-id", todo.id);
//   div.innerHTML = `
//         <span class="title">${todo.title}</span>
//         <div class="actions">
//             <i class="fa-solid fa-check check-btn bg-green-300 text-white p-2 rounded-lg hover:bg-white hover:text-green-300 transition-all 0.2s"></i>
//             <i class="fa-solid fa-trash delete-btn bg-[#A0153E] text-white p-2 rounded-lg hover:bg-white hover:text-[#A0153E] transition-all 0.2"></i>
//         </div>`;

//   if (todo.isFinished) {
//     div.classList.add("done");
//   }

//   return div;
// }

// function saveTodos() {
//   localStorage.setItem("todos", JSON.stringify(todos));
// }

// function generateUUID() {
//   return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
//     const r = (Math.random() * 16) | 0;
//     const v = c == "x" ? r : (r & 0x3) | 0x8;
//     return v.toString(16);
//   });
// }

// function handleTodoClick(event) {
//   const target = event.target;

//   if (target.classList.contains("delete-btn")) {
//     const id = target.parentElement.parentElement.getAttribute("data-id");
//     todos = todos.filter((todo) => todo.id !== id);
//     saveTodos();
//   } else if (target.classList.contains("check-btn")) {
//     const id = target.parentElement.parentElement.getAttribute("data-id");
//     todos.forEach((todo) => {
//       if (todo.id === id) {
//         todo.isFinished = !todo.isFinished;
//       }
//     });
//     saveTodos();
//   }

//   updateUI();
// }

// todosContainer.addEventListener("click", handleTodoClick);

// updateUI();

const todoForm = document.querySelector(".todoForm");
const todosContainer = document.querySelector(".todos");
let todos = JSON.parse(localStorage.getItem("todos")) || [];


console.log(todos);

todoForm.addEventListener("submit", (e) => {
  if (e.target.title.value == "") {
    alert("empty title error");
  } else {
    const newTodo = {
      title: e.target.title.value,
      isFinished: false,
      id: generateUUID(),
    };
    todos.push(newTodo);

    todoForm.reset();

    localStorage.setItem("todos", JSON.stringify(todos));

    renderInUI(todos, todosContainer);
    e.preventDefault();
  }
});

todosContainer.addEventListener('click',(e)=>{
  if(e.target.classList.contains('delete-btn')){
    const todoId = e.target.parentElement.parentElement.getAttribute("data-id");

    todos = todos.filter((item)=> item.id !== todoId);

    renderInUI(todos,todosContainer);

    localStorage.setItem("todos", JSON.stringify(todos));
  }
})

function renderInUI(list, place) {
  place.innerHTML = "";
  list.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add(
      "todo",
      "w-full",
      "bg-green-100",
      "h-[80px]",
      "rounded-xl",
      "flex",
      "items-center",
      "justify-between",
      "p-3",
      "mt-3"
    );
    div.setAttribute("data-id", item.id);
    div.innerHTML = `
        <span class="title">${item.title}</span>
        <div class="actions">
            <i class="fa-solid fa-check check-btn bg-green-300 text-white p-2 rounded-lg hover:bg-white hover:text-green-300 transition-all 0.2s"></i>
            <i class="fa-solid fa-trash delete-btn bg-[#A0153E] text-white p-2 rounded-lg hover:bg-white hover:text-[#A0153E] transition-all 0.2"></i>
        </div>`;

    place.appendChild(div);
  });
}

function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

renderInUI(todos, todosContainer);
