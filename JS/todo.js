const max = 10;
const zero = 0;
let list = document.getElementById('todos');
document.getElementById('btn').disabled = true;
document.getElementById('task').onkeyup = function () {
    addWorks();
}

function addWorks() {
    if (document.getElementById('task').value.trim().length === zero) {
        document.getElementById('btn').disabled = true;
    } else {
        document.getElementById('btn').disabled = false;
    }
}

function addItem() {
    const newTask = document.createElement('li');
    newTask.setAttribute('class', 'task_in_list');
    let typedTask = document.getElementById('task').value;
    let btn_done = document.createElement('button');
    btn_done.setAttribute('class', 'btn-done');
    btn_done.innerHTML = '<i class="material-icons">check_box_outline_blank</i>'
    let btn_delete = document.createElement('button');
    btn_delete.setAttribute('class', 'btn-delete');
    btn_delete.innerHTML = '<img src="./assets/img/bin.png">';
    let text = document.createTextNode(typedTask);
    list.appendChild(newTask);
    newTask.appendChild(btn_done);
    newTask.appendChild(text);
    newTask.appendChild(btn_delete);

    btn_done.onclick = event => {
        btn_done.innerHTML = '<i class="material-icons">check_box</i>'
    };

    btn_delete.onclick = event => {
        list.removeChild(newTask);
        document.getElementById('task').disabled = false;
    };

    if (typedTask.length > zero && list.getElementsByTagName('li').length <= max) {
        document.getElementById('task').value = '';
        document.getElementById('btn').disabled = true;
    } else if (list.getElementsByTagName('li').length === max) {
        document.getElementById('btn').disabled = true;
    }
}
