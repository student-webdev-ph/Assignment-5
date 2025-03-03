// document.getElementById('desk').addEventListener('click', function (event) {
//     event.preventDefault();
//     window.location.href = "./index.html"
// })
// document.getElementById('discover').addEventListener('click', function (event) {
//     event.preventDefault();
//     window.location.href = "./main.html"
// })
const discoverDiv = document.getElementById('discover')
const deskBtn = document.getElementById('desk')

if (discoverDiv) {
    discoverDiv.addEventListener ('click', function(event){
        event.preventDefault();
        window.location.href = "./main.html";
    })
}

if (deskBtn){
    deskBtn.addEventListener('click', function (event){
        event.preventDefault();
        window.location.href = "./index.html"
    })
}


      //btn1
const btn1 = document.getElementById('btn1').addEventListener('click', function(){
    const task = document.getElementById('task').innerText;
    const convertedTask = parseInt(task);
    const totalTask =  document.getElementById('total-task').innerText;
    const convertedTotalTask = parseInt (totalTask);

    if(convertedTask > 0) {
        const subs = convertedTask - 1;
        const sum = convertedTotalTask + 1;
        document.getElementById('task').innerText = subs
        document.getElementById('total-task').innerText = sum
    }
    this.disabled = true;
    this.style.backgroundColor ='#a9a9a9';
})


    //btn2
const btn2 = document.getElementById('btn2').addEventListener('click', function(){
    const task = document.getElementById('task').innerText;
    const convertedTask = parseInt(task);
    const totalTask =  document.getElementById('total-task').innerText;
    const convertedTotalTask = parseInt (totalTask);

    if(convertedTask > 0) {
        const subs = convertedTask - 1;
        const sum = convertedTotalTask + 1;
        document.getElementById('task').innerText = subs
        document.getElementById('total-task').innerText = sum
    }
    this.disabled = true;
    this.style.backgroundColor ='#a9a9a9';
})


   //btn3
const btn3 = document.getElementById('btn3').addEventListener('click', function(){
    const task = document.getElementById('task').innerText;
    const convertedTask = parseInt(task);
    const totalTask =  document.getElementById('total-task').innerText;
    const convertedTotalTask = parseInt (totalTask);

    if(convertedTask > 0) {
        const subs = convertedTask - 1;
        const sum = convertedTotalTask + 1;
        document.getElementById('task').innerText = subs
        document.getElementById('total-task').innerText = sum
    }
    this.disabled = true;
    this.style.backgroundColor ='#a9a9a9';
})


   //btn4
   const btn4 = document.getElementById('btn4').addEventListener('click', function(){
    const task = document.getElementById('task').innerText;
    const convertedTask = parseInt(task);
    const totalTask =  document.getElementById('total-task').innerText;
    const convertedTotalTask = parseInt (totalTask);

    if(convertedTask > 0) {
        const subs = convertedTask - 1;
        const sum = convertedTotalTask + 1;
        document.getElementById('task').innerText = subs
        document.getElementById('total-task').innerText = sum
    }
    this.disabled = true;
    this.style.backgroundColor ='#a9a9a9';
})


  //btn5
  const btn5 = document.getElementById('btn5').addEventListener('click', function(){
    const task = document.getElementById('task').innerText;
    const convertedTask = parseInt(task);
    const totalTask =  document.getElementById('total-task').innerText;
    const convertedTotalTask = parseInt (totalTask);

    if(convertedTask > 0) {
        const subs = convertedTask - 1;
        const sum = convertedTotalTask + 1;
        document.getElementById('task').innerText = subs
        document.getElementById('total-task').innerText = sum
    }
    this.disabled = true;
    this.style.backgroundColor ='#a9a9a9';
})


  //btn6
  const btn6 = document.getElementById('btn6').addEventListener('click', function(){
    const task = document.getElementById('task').innerText;
    const convertedTask = parseInt(task);
    const totalTask =  document.getElementById('total-task').innerText;
    const convertedTotalTask = parseInt (totalTask);

    if(convertedTask > 0) {
        const subs = convertedTask - 1;
        const sum = convertedTotalTask + 1;
        document.getElementById('task').innerText = subs
        document.getElementById('total-task').innerText = sum
    }
    this.disabled = true;
    this.style.backgroundColor ='#a9a9a9';
})

