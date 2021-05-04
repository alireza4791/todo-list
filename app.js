const task = document.querySelector('#task');
const btn = document.querySelector('#add_task');
const tasks = document.querySelector('#tasks');
const btn_del = document.querySelector('#delete_button');
const btn_done = document.querySelector('#done_button');
const add_sound = document.querySelector('#add');
const done_sound = document.querySelector('#done_sound');
const delete_sound = document.querySelector('#delete_sound');
const delete_all_sound = document.querySelector('#delete_all_sound');
const done_all_sound = document.querySelector('#done_all_sound');
let list = {};
let done_list = {};
let i = 0

let retrievedObject = localStorage.getItem('user');
retrievedObject = JSON.parse(retrievedObject);
let retrievedObject2 = localStorage.getItem('done');
retrievedObject2 = JSON.parse(retrievedObject2);

for (const key in retrievedObject) {
    let item = document.createElement('li');
    item.innerText = key;
    for (const done in retrievedObject2) {
        if(item.innerText == done){
            item.style.textDecoration = 'line-through';
        }
    }
    tasks.style.textDecoration = 'none';
    tasks.appendChild(item);
    item.onclick= ()=>
    {
        if(item.style.textDecoration == 'line-through'){
            delete list[item.innerText];
            localStorage.setItem('user',JSON.stringify(list));
            item.style.display = 'none';
            delete_sound.play();
        }
        else
        {
        item.style.textDecoration = 'line-through';
        done_sound.play();
        }
        item.onclick =()=>{
            delete list[item.innerText];
            localStorage.setItem('user',JSON.stringify(list));
            item.style.display = 'none';
            delete_sound.play();
        }
    }

    item.ontouchstart= ()=>
    {
        if(item.style.textDecoration == 'line-through'){
            delete list[item.innerText];
            localStorage.setItem('user',JSON.stringify(list));
            item.style.display = 'none';
            delete_sound.play();
        }
        else
        {
        item.style.textDecoration = 'line-through';
        done_sound.play();
        }
        item.ontouchstart =()=>{
            delete list[item.innerText];
            localStorage.setItem('user',JSON.stringify(list));
            item.style.display = 'none';
            delete_sound.play();
        }
    }
}



btn.onclick = ()=>{
    if(task.value === ''){
        alert('please Enter A Task!');
    }
    else
    {
        let item = document.createElement('li');
        item.innerText = task.value;
        list[item.innerText] = item.innerText;
        task.value = '';
        localStorage.setItem('user', JSON.stringify(list));
        // tasks.style.textDecoration = 'none';
        tasks.appendChild(item);
        // item.style.textDecoration = 'none';
        item.onclick= ()=>{
            item.style.textDecoration = 'line-through';
            console.log(item.innerText)
            done_list[item.innerText] = item.innerText;
            localStorage.setItem('done', JSON.stringify(done_list));
            done_sound.play();
            item.onclick =()=>{
                delete list[item.innerText];
                localStorage.setItem('user',JSON.stringify(list));
                item.style.display = 'none';
                delete_sound.play();
            }
        }
        add_sound.play();
    }
}

btn.ontouchstart = ()=>{
    if(task.value === ''){
        alert('please Enter A Task!');
    }
    else
    {
        let item = document.createElement('li');
        item.innerText = task.value;
        list[item.innerText] = item.innerText;
        task.value = '';
        localStorage.setItem('user', JSON.stringify(list));
        // tasks.style.textDecoration = 'none';
        tasks.appendChild(item);
        // item.style.textDecoration = 'none';
        item.ontouchstart= ()=>{
            item.style.textDecoration = 'line-through';
            console.log(item.innerText)
            done_list[item.innerText] = item.innerText;
            localStorage.setItem('done', JSON.stringify(done_list));
            done_sound.play();
            item.ontouchstart =()=>{
                delete list[item.innerText];
                localStorage.setItem('user',JSON.stringify(list));
                item.style.display = 'none';
                delete_sound.play();
            }
        }
        add_sound.play();
    }
}

btn_del.onclick = ()=>{
    for (var member in list) delete list[member];
    localStorage.clear();
    tasks.innerHTML = '';
    delete_all_sound.play();
}

btn_del.ontouchstart = ()=>{
    for (var member in list) delete list[member];
    localStorage.clear();
    tasks.innerHTML = '';
    delete_all_sound.play();
}

btn_done.onclick = ()=>{
    for (let element in done_list) delete done_list[element];
    for(let value in list) done_list[value] = list[value];
    localStorage.setItem('done', JSON.stringify(done_list));
    tasks.style.textDecoration = 'line-through';
    done_all_sound.play();

}

btn_done.ontouchstart = ()=>{
    for (let element in done_list) delete done_list[element];
    for(let value in list) done_list[value] = list[value];
    localStorage.setItem('done', JSON.stringify(done_list));
    tasks.style.textDecoration = 'line-through';
    done_all_sound.play();
}