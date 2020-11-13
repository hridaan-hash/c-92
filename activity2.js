function back ()
{
    window.location="activity_2.html";
}

function getScore ()
{
    score=localStorage.getItem("score");
    document.getElementById("update").innerHTML="score; "+score;

}