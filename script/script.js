// cards task add, task remove and history update and remove funcion
    taskUpdate("btn1", "Fix Mobile Button Issue ")
    taskUpdate("btn2", "Add Dark Mode")
    taskUpdate("btn3", "Optimize  Home page ")
    taskUpdate("btn4", "Add new emoji 🤲")
    taskUpdate("btn5", "Integrate OpenAI API")
    taskUpdate("btn6", "Improve Job searching")
    

// for update realtime date
    function workSectionDate() {
        let now = new Date();
        let values = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
        document.getElementById("workSectionDate").innerText = now.toLocaleDateString('en-US', values);
        document.getElementById("workSectionDate").style.fontWeight = "500";
        
    }
    
    workSectionDate();


    

    


