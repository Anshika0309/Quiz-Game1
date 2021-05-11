class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question element
    question.hide();

    //write code to change the background color here
    background("purple");
    fill(0);

    //write code to show a heading for showing the result of Quiz
    textSize(35);
text("Quiz Start",340,50);
text("------------------------------------------------",320,65);
Contestant.getPlayerInfo();
    
    //write condition to check if contestantInfor is not undefined
    if(allContestants !== undefined){
      debugger;
      var display_Answers = 230;
      fill("yellow");
      textSize(20);
      text("NOTE: The constestants who answered correct are highlighted in green!",130,230);

    //write code to highlight contest who answered correctly

    for(var plr in allContestants){
      debugger;

      var correctAns = "2";
      if(correctAns === allContestants[plr].answer)
      fill("green");
      else
      fill("pink");
display_Answers +=30;
textSize(20);
text(allContestants[plr].name + ":" + allContestants [plr].answer,250,diplay_Answers);

    }
    
  }

}
}
