//Bước 1: Lấy ND chứa chữ, tên khóa học
//Bước 2: Rút gọn
//Bước 3: Gắn lại đoạn nội dung đó

//Gọi hàm
//Để trong các sự kiện
//Ready


/* Truncate Card Title */
window.addEventListener("load",function(){
    truncateCardTitle();
});


function truncateCardTitle(){
    var cardList = document.getElementsByClassName("card-title");
    console.log(cardList);
    for(var i = 0; i < cardList.length;i++){
        var text = cardList[i].innerHTML;//Lấy đoạn chữ nội dung bên trong
        var newText = truncateString(text,35);
        cardList[i].innerHTML = newText;
    }
}

function truncateString(str,num){
    if(str.length > num){
        return str.slice(0,num) + "...";
    } else{
        return str;
    }
}


/* SideBar Mini */
var toggleBTN = document.querySelector('.sidebarMini__button');
var sidebarMini = document.querySelector('.sidebarMini');
var switchBtn = document.querySelector('#checkbox');



// Thêm sự kiện cho sidebarMini__button
toggleBTN.addEventListener('click',function(){
    sidebarMini.classList.toggle('is-opened');
});


switchBtn.addEventListener('click',function(){
    document.querySelector('body').classList.toggle('darkMode');
});
