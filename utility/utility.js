function taskUpdate(btn){

    document.getElementById(btn).addEventListener('click', function(){

        
        if(!alert('board updated successfully') === true){
    
    
            let taskId = document.getElementById('taskId').innerText;
            let valtaskId = parseInt(taskId);
            document.getElementById('taskId').innerText = valtaskId - 1;
            
            let mainCheck = document.getElementById('mainCheck').innerText;
            let valmainCheck = parseInt(mainCheck);
            document.getElementById('mainCheck').innerText = valmainCheck + 1;


    let div = document.createElement('div');
    div.innerHTML = `
    <p id="his" class="text-xl text-black text-center p-4 mt-4 bg-slate-200 rounded-lg">task is added</p>
    `
    document.getElementById('activity').appendChild(div);

document.getElementById('btnHistory').addEventListener('click', function(){
    document.getElementById('activity').removeChild(div);
   
})
            
            
            document.getElementById(btn).disabled = true;
            document.getElementById(btn).style.background = 'gray'         
    
        }
        if(document.getElementById('taskId').innerText < 1){
            alert('sesh vai seshh')
        }
    })
    
    
   
}


