
// funtion for card and history sections work

function taskUpdate(btn, his){

    document.getElementById(btn).addEventListener('click', function(){

        
    if(!alert('Board Updated Successfully') === true){
    
    
            let taskId = document.getElementById('taskId').innerText;
            let valtaskId = parseInt(taskId);
            document.getElementById('taskId').innerText = valtaskId - 1;
            
            let mainCheck = document.getElementById('mainCheck').innerText;
            let valmainCheck = parseInt(mainCheck);
            document.getElementById('mainCheck').innerText = valmainCheck + 1;


    let realTime = new Date().toLocaleTimeString();
    
    
    let div = document.createElement('div');
    div.innerHTML = `
    <p id="${his}" class="w-11/12 text-sm text-black text-center p-2 mt-4 bg-slate-200 rounded-lg mx-auto">You have Complete The Task ${his} <br> at ${realTime}</p>
    `
    document.getElementById('activity').appendChild(div);

    document.getElementById('btnHistory').addEventListener('click', function(){
    document.getElementById('activity').removeChild(div);
   
})
            
            
            document.getElementById(btn).disabled = true;
            document.getElementById(btn).style.background = 'gray'         
    
        }
        if(document.getElementById('taskId').innerText < 1){
            alert('congratulations! you added all the task')
        }
    })
    
   
   
}



