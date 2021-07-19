function addUser()
{
    player1_name = document.getElementById("number1_name_input").value;
    player2_name = document.getElementById("number2_name_input").value;


    localStorage.setItem("number1_name" , number1_name);
    localStorage.setItem("number2_name" , number2_name);


    window.location="game.html";
}