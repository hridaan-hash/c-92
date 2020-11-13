player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
player1_score=0;
player2_score=0;
document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player2_name").innerHTML=player2_name+" : ";
document.getElementById("player_question").innerHTML="question turn- "+player1_name;
document.getElementById("player_anwser").innerHTML="anwser turn- "+player2_name;
function addUser() 
{
player1_name = document.getElementById("player1_name_input").value;
player2_name = document.getElementById("player2_name_input").value;

localStorage.setItem("player1_name", player1_name);
localStorage.setItem("player2_name", player2_name);

window.location= "game_page.html";
}

function send()
{
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log("word in lower case= "+word);
    charAt1=word.charAt(1);
    console.log (charAt1);
length_divide_2=math.floor(word.length/2);
charAt2=word.charAt(length_divide_2);
console.log (charAt2);
length_minus_1=word.length-1
charAt3=word.charAt(length_minus_3);
    console.log (charAt3);
    remove_charAt1=word.replace(charAt1,"_");
    remove_charAt2=remove_charAt1.replace(charAt2,"_");
    remove_charAt3=remove_charAt2.replace(charAt3,"_");
    console.log(remove_charAt3);
    question_word="<h4 id='word_display'>que."+remove_charAt3+"</h4>";
    input_box="<br>anwser: <input type='text'id='input_check_box'>";
    check_button="<br><br> <button class='btn btn-info' onclick='check()'>check </button>";
    row=question_word+input_box+check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value="";
}
question_turn="player1";
answer_turn="player2";
function check()
{
    get_answer =document.getElementById("input_check_box").value;
    console.log("anweser in lower case -" +answer);

if(answer_turn==word);

{
    if(answer_turn=="player1")
    {
        player1_score= player1_score+1;
        document.getElementById("player1_score").innerHTML=player1_score;
    }

else
{
    player2_score=player2_score +1;
    document.getElementById(player1_score).innerHTML=player2_score ; 
}
}
if(question_turn=="player1")
{
    question_turn="player2";
document.getElementById("player_question").innerHTML= "question turn- "+player2_name;
}
else
{
    question_turbn="player1"
    document.getElementById(player_anwser).innerHTML= "question turn- "+ player1_name;
}
if(answer_turn=="player1")
{
    answer_turn="player2"
    document.getElementById("player_anwser").innerHTML="Anwser Turn - "+player2_name;
}
else
{
    answer_turn="player1"
    document.getElementById("player_anwser").innerHTML="Anwser Turn - "+player1_name;
}
document.getElementById("output").innerHTML="";
}
