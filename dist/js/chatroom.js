//Toggle chatroom
const chatBtn = document.querySelector('.iconCtn');
const chatIcon = document.querySelector('.chatIcon');
const chatroom = document.querySelector('.chatroom');

let showChatroom = false;

chatBtn.addEventListener('click', toggleChatroom);

function toggleChatroom(){
    if(!showChatroom){
        chatIcon.innerHTML = '<i class="fas fa-times fa-2x"></i>';
        chatroom.classList.add('open');
        showChatroom = true;
    } else {
        chatIcon.innerHTML = '<i class="fas fa-comments fa-2x"></i>';
        showChatroom = false;
        chatroom.classList.remove('open');
    }
}

const sendMsgBtn = document.querySelector('.sendMsg'); //This is the button to send msg
const userInput = document.getElementById('userDirectMsg'); //This is the input field to type msg into
const userChatItem = document.querySelector('.chatItem-user'); //This is the container in the chatroom, which will show what the user submits

const chatItems = document.querySelector('.chatItems');//contain all the chat item of both spaceT and user

sendMsgBtn.addEventListener('click', postMsg);

function postMsg(){
    if(userInput.value.length != 0) {
        //First we need to create a new chat item in the chat room to store what user submits
        let newItem = document.createElement('div');
        newItem.classList.add('chatItem-user');
        newItem.innerHTML = '<div class="chatMsg"><p class="userChatMsg"></p></div><div class="userIcon"><i class="fas fa-user fa-2x"></i></div>';
        chatItems.appendChild(newItem);
        let userChatMsgs = document.querySelectorAll('.userChatMsg'); //select all message boxes
        let i = userChatMsgs.length - 1; //get index for the last message box
        userChatMsgs[i].innerHTML = userInput.value; //add userinput value for the latest created chat item box
        userInput.value = ''; //clear input field after sending msg
    } else {
        alert('Your message is empty, please try again!');
    }
}

//Enter to submit message
// Execute a function when the user releases a key on the keyboard
userInput.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      sendMsgBtn.click();
    }
  }); 



