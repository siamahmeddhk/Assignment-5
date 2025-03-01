document.getElementById('cngTheme').addEventListener('click', function(){
    let cngTheme = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
    document.getElementById('mainBody').style.background = cngTheme;
})


document.getElementById('btnQuestion').addEventListener('click', function(){
    window.location.href = './qestion.html'
})