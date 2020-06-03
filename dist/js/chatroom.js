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