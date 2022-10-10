function postFunction(){
    var post1 = document.getElementById("topic1");
    var comment1 = document.getElementById("comment1");
    var comment2 = document.getElementById("comment2");
    if(post1.innerHTML == ''){
        post1.innerHTML = document.getElementById("text1").value;
    }
    else if (comment1.innerHTML == ''){
        comment1.innerHTML = document.getElementById("text1").value;
    }
    else if(comment2.innerHTML == ''){
        comment2.innerHTML = document.getElementById("text1").value;
    }
}

function clearFunction(){
    topic1.innerHTML = '';
    comment1.innerHTML = '';
    comment2.innerHTML = '';
}