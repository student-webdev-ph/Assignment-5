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

const img = document.getElementById("colors");
const colors = ["#ff0000", "#ff7f00", "#ffff00", "#00ff00", "#0000ff", "#4b0082", "#8b00ff"];
img.addEventListener('click', function(){
    const randomColors = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColors;
})



// const img = document.getElementById("colors").addEventListener('click', function () {
//     const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
//     document.body.style.backgroundColor = randomColor;
// })



      //btn1
    const btn1 = document.getElementById('btn1').addEventListener('click', function(){
    const task = document.getElementById('task').innerText;
    const convertedTask = parseInt(task);
    const totalTask =  document.getElementById('total-task').innerText;
    const convertedTotalTask = parseInt (totalTask);
    const title1 = document.getElementById('title-1');
    const titleText1 = title1.innerText;
    const commentContainer = document.getElementById('comment-container');
    commentContainer.innerText = 'You have Complete The Task '  + title1.innerText +  ' at 12:48:15 PM';
    commentContainer.append("")
    

    if(convertedTask > 0) {
        const subs = convertedTask - 1;
        const sum = convertedTotalTask + 1;
        document.getElementById('task').innerText = subs
        document.getElementById('total-task').innerText = sum
    }
    this.disabled = true;
    this.style.backgroundColor ='#a9a9a9';

    if (parseInt(task.innerText) === 0) {
        alert("this is 0");
    }
})


    //btn2
const btn2 = document.getElementById('btn2').addEventListener('click', function(){
    const task = document.getElementById('task').innerText;
    const convertedTask = parseInt(task);
    const totalTask =  document.getElementById('total-task').innerText;
    const convertedTotalTask = parseInt (totalTask);
    const title2 = document.getElementById('title-2');
    const titleText2 = title2.innerText;
    const commentContainer = document.getElementById('comment-container');
    commentContainer.innerText = 'You have Complete The Task '  + title2.innerText +  ' at 12:48:15 PM';
    commentContainer.append("")

    if(convertedTask > 0) {
        const subs = convertedTask - 1;
        const sum = convertedTotalTask + 1;
        document.getElementById('task').innerText = subs
        document.getElementById('total-task').innerText = sum
    }
    this.disabled = true;
    this.style.backgroundColor ='#a9a9a9';

    if (parseInt(task.innerText) === 0){
        alert("this is 0");
    }
})


   //btn3
const btn3 = document.getElementById('btn3').addEventListener('click', function(){
    const task = document.getElementById('task').innerText;
    const convertedTask = parseInt(task);
    const totalTask =  document.getElementById('total-task').innerText;
    const convertedTotalTask = parseInt (totalTask);
    const title3 = document.getElementById('title-3');
    const titleText3 = title3.innerText;
    const commentContainer = document.getElementById('comment-container');
    commentContainer.innerText = 'You have Complete The Task '  + title3.innerText +  ' at 12:48:15 PM';
    commentContainer.append("")

    if(convertedTask > 0) {
        const subs = convertedTask - 1;
        const sum = convertedTotalTask + 1;
        document.getElementById('task').innerText = subs
        document.getElementById('total-task').innerText = sum
    }
    this.disabled = true;
    this.style.backgroundColor ='#a9a9a9';

    if (parseInt(task.innerText) === 0){
        alert("this is 0");
    }
})


   //btn4
   const btn4 = document.getElementById('btn4').addEventListener('click', function(){
    const task = document.getElementById('task').innerText;
    const convertedTask = parseInt(task);
    const totalTask =  document.getElementById('total-task').innerText;
    const convertedTotalTask = parseInt (totalTask);
    const title4 = document.getElementById('title-4');
    const titleText4 = title4.innerText;
    const commentContainer = document.getElementById('comment-container');
    commentContainer.innerText = 'You have Complete The Task '  + title4.innerText +  ' at 12:48:15 PM';
    commentContainer.append()


    if(convertedTask > 0) {
        const subs = convertedTask - 1;
        const sum = convertedTotalTask + 1;
        document.getElementById('task').innerText = subs
        document.getElementById('total-task').innerText = sum
    }
    this.disabled = true;
    this.style.backgroundColor ='#a9a9a9';

    if (parseInt(task.innerText) === 0){
        alert("this is 0");
    }
})


  //btn5
  const btn5 = document.getElementById('btn5').addEventListener('click', function(){
    const task = document.getElementById('task').innerText;
    const convertedTask = parseInt(task);
    const totalTask =  document.getElementById('total-task').innerText;
    const convertedTotalTask = parseInt (totalTask);
    const title5 = document.getElementById('title-5');
    const titleText5 = title5.innerText;
    const commentContainer = document.getElementById('comment-container');
    commentContainer.innerText = 'You have Complete The Task '  + title5.innerText +  ' at 12:48:15 PM';
    commentContainer.append("");

    if(convertedTask > 0) {
        const subs = convertedTask - 1;
        const sum = convertedTotalTask + 1;
        document.getElementById('task').innerText = subs
        document.getElementById('total-task').innerText = sum
    }
    this.disabled = true;
    this.style.backgroundColor ='#a9a9a9';

    if (parseInt(task.innerText) === 0){
        alert("this is 0");
    }
})


  //btn6
  const btn6 = document.getElementById('btn6').addEventListener('click', function(){
    const task = document.getElementById('task').innerText;
    const convertedTask = parseInt(task);
    const totalTask =  document.getElementById('total-task').innerText;
    const convertedTotalTask = parseInt (totalTask);
    const title6 = document.getElementById('title-6');
    const titleText6 = title6.innerText;
    const commentContainer = document.getElementById('comment-container');
    commentContainer.innerText = 'You have Complete The Task '  + title6.innerText +  ' at 12:48:15 PM';
    commentContainer.append();

    if(convertedTask > 0) {
        const subs = convertedTask - 1;
        const sum = convertedTotalTask + 1;
        document.getElementById('task').innerText = subs
        document.getElementById('total-task').innerText = sum
    }
    this.disabled = true;
    this.style.backgroundColor ='#a9a9a9';

    if (parseInt(task.innerText) === 0){
        alert("this is 0");
    }
})

const history = document.getElementById('history').addEventListener('click', function(){
    document.getElementById('comment-container').innerText = ''
})


const alert = document.getElementById('task').innerText
convertedAlert = parseInt(alert)
if(convertedAlert === 0 ){
    alert();
}

