
let form = document.querySelector('form');
let textNode = document.getElementById('textNode');

function addingTask(e){
    e.preventDefault();
    let inputValue = document.querySelector('input[type="text"]').value;
    if(inputValue !== ''){
        function addingTask(task){
            const li = document.createElement('li');
            const span1 = document.createElement('span');
            span1.className = 'material-symbols-outlined';
            span1.textContent = 'radio_button_checked';
            span1.style.color = 'brown';
            const div = document.createElement('div');
            div.textContent = task;
            const span2 = document.createElement('span');
            span2.className = 'material-symbols-outlined';
            span2.textContent = 'close';
            
            li.appendChild(span1);
            li.appendChild(div);
            li.appendChild(span2);
            textNode.appendChild(li);
            
            function deleteTask(){
                li.remove();
            }
            span2.addEventListener('click', deleteTask);
    
            function markDone(){
                if(span1.style.color === 'brown'){
                    span1.style.color = 'green';
                }else if(span1.style.color === 'green'){
                    span1.style.color = 'brown';
                }
            }
            span1.addEventListener('click', markDone);
        }
        addingTask(inputValue);
    }
    
}

form.addEventListener('submit', addingTask);
