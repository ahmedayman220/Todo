// selectors
let inputTodo = document.querySelector(".input_todo")
let btnTodo = document.querySelector(".btn_todo")
let parentTodo = document.querySelector(".parent_todo")
let filter_todo = document.querySelector(".filter_todo")
let icon_bottom_modifyed = document.querySelector(".icon_bottom_modifyed")

// varibals
childParentTodo = parentTodo.children
    // Event Lisitener
btnTodo.addEventListener("click", addTodo)
parentTodo.addEventListener("click", eventTodo)
filter_todo.addEventListener("click", filter_todo_fun)



// functions

// ======================================================
// function draw when parent empty befor click btntodo
// ======================================================


function draw_empty_befor_click() {
    parentTodo.innerHTML += `
                <div class="todo_list not_val">
                    <div class="todo_list_content"style="justify-content: center;">
                        <h4 class="val " > 😀__😀 There are no missions today 😀__😀</h4>
                    </div>
                </div>
    `
}

function checkImpty() {
    if (parentTodo.childElementCount == false) {
        filter_todo.style.display = "none"
        draw_empty_befor_click()
    }
}
checkImpty()



// ======================================================
// function draw when parent empty befor click btntodo
// ======================================================


// ======================================================
// function add item when click  btntodo
// ======================================================



//  function draw abologize 
function draw_abologize() {
    parentTodo.innerHTML += `
    <div class="todo_list not_val">
    <div class="todo_list_content"style="justify-content: center;">
    <h4 class="val " > ☹__😌 Sorry... the field is empty ☹__😌</h4>
    </div>
    </div>
    </div>
    `
}

// draw new items 
function new_items() {
    parentTodo.innerHTML += `
    <div class="todo_list ">
    <div class="todo_list_content">
    <h4 class="val">${inputTodo.value}</h4>
    <div class="icon_list_action">
    <div class="ban"><i class="fas fa-ban ban"></i></div>
    <div class="delete"><i class="fas fa-backspace "></i></div>
    <div class="modify"><i class="fas fa-pencil-alt "></i></div>
    </div>
    </div>
    <div class="modifaction">
    <div class="input_modify_val">
    <div class="input_modefied">
    <input type="text" id="input_modeficate">
    </div>
    <div class="icon_bottom_modifyed">
    <div class="edit"><i class="fas fa-edit"></i></div>
    </div>
    </div>
    </div>
    </div>
    `
    inputTodo.value = ""
}
// check the first child contain class not val
function check_child_class(d_none_block) {
    let first_item = childParentTodo[0]
    if (first_item) {
        if (parentTodo.children.length > 0) {

            if (first_item.classList.contains("not_val")) {

                parentTodo.innerHTML = ""
                filter_todo.style.display = (d_none_block)

            }

        }
    }

}

function addTodo(event) {

    // prevent default
    event.preventDefault()


    // check inputTodo empty and added abologize when input empty

    if (inputTodo.value == "") {

        check_child_class("none")
            // when noe find elements in parentTodo  
        if (parentTodo.childElementCount == false) {
            draw_abologize()
        }
    } else {

        check_child_class("block")
        new_items()

    }
}

// ======================================================
// function add item when click  btntodo
// ======================================================

function eventTodo(e) {
    // remove item
    let item = e.target
    if (item.classList == "delete") {

        let parentItem = item.parentElement.parentElement.parentElement

        parentItem.classList.add("fall")
        parentItem.addEventListener("transitionend", () => {
            parentItem.remove()

        })

    }
    // ban
    if (item.classList == "ban") {

        parentItem = item.parentElement.parentElement
        parentItem.classList.toggle("task_event")
        parentItem.parentElement.classList.toggle("compleated")

    }

    // modify
    if (item.classList == "modify") {
        let parentItem = item.parentElement.parentElement.parentElement
        parentItem.classList.toggle("heigth_default")

    }
    if (item.classList == "edit") {

        old_Item = item.parentElement.parentElement.parentElement.previousElementSibling.children[0]
        modern_Item = item.parentElement.previousElementSibling.children[0]
        old_Item.innerHTML = modern_Item.value
        console.log(item.parentElement.parentElement.parentElement.parentElement.classList.remove("heigth_default"));

    }

}


function filter_todo_fun(e) {
    let item = e.target
    let childsTodoList = parentTodo.children
    for (let i = 0; i < parentTodo.children.length; i++) {
        switch (item.getAttribute("value")) {
            case "all":
                childsTodoList[i].style.display = "block"
                break;
            case "compleated":
                childsTodoList[i].style.display = "block"
                if (!childsTodoList[i].classList.contains("compleated")) {
                    childsTodoList[i].style.display = "none"
                }
                break;
            case "uncompleated":
                childsTodoList[i].style.display = "block "
                if (childsTodoList[i].classList.contains("compleated")) {
                    childsTodoList[i].style.display = "none "
                }
                break;
        }
    }

}