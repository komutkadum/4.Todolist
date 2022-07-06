let input = document.getElementById('input');
let list = document.getElementById('list');
let button = document.getElementById('button-addon2');

let arrList = [];



button.addEventListener('click',()=>{

    arrList.push(input.value);

    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    arrList.forEach((value)=>{
        let newInnerList = document.createElement('li');
        // creating delete button
        let deleteButton = document.createElement('button');
        deleteButton.classList.add('btn','btn-danger');
        deleteButton.innerText = 'delete'
        // adding class to newly created list
        newInnerList.classList.add("list-group-item","d-flex","justify-content-between","align-items-center");
        // adding input value and button to the newly created list
        newInnerList.innerText = value;
        newInnerList.append(deleteButton)
        list.append(newInnerList);
    })
    
    // clearing out input value after inserting
    input.value = ""
})

