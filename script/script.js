
    taskUpdate("btn1", )
    taskUpdate("btn2", )
    taskUpdate("btn3", )
    taskUpdate("btn4", )
    taskUpdate("btn5", )
    taskUpdate("btn6", )
    


    function workSectionDate() {
        let now = new Date();
        let values = { weekday: 'long', day: 'numeric',  month: 'long', year: 'numeric' };
        document.getElementById("workSectionDate").innerText = now.toLocaleDateString('en-GB', values);
        document.getElementById("workSectionDate").style.fontWeight = "500";
    }
    
    workSectionDate();
    


