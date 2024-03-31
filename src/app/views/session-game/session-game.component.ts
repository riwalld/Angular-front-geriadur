import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GameSessionStep } from 'src/app/models/GameSessionStep';
import { AlertService } from 'src/app/services/alert.service';
import { SessionGameService } from 'src/app/services/session.game.service';

@Component({
  selector: 'app-session-game',
  templateUrl: './session-game.component.html',
  styles: ``
})
export class SessionGameComponent implements OnInit {

  gameSessionStep: GameSessionStep[] = [];
  questionNo: number = 0;
  score: number = 0;
  wordTheme: number = 0;
  level: number = 0;
  isLoading!: boolean;

  @ViewChild('currentName') currentNameElement!: ElementRef;
  @ViewChild('etymoName')   etymoNameElement!: ElementRef;
  @ViewChild('answer-btn')answerButtonElement!: ElementRef;
  @ViewChild('next-btn') nextButtonElement!: ElementRef;
  @ViewChild('etymoDescription') etymoDescrElement! : ElementRef;
  @ViewChild('level-btn')  levelElement!: ElementRef;


  constructor(
    private router: Router,
    private sessionGameService: SessionGameService,
    private alert: AlertService
  ) { this.wordTheme = +!sessionStorage.getItem('wordTheme'); }


  ngOnInit(): void {
   this.getAll();
  }

 getAll() {
    //this.isLoading = true;
    this.sessionGameService.getAllByTheme(this.wordTheme).subscribe(
      data => {
        this.gameSessionStep = data;
        this.isLoading = false;
        console.log(this.gameSessionStep);
        this.showQuestion();
      },
      (err) => {
        this.alert.alertError(err.error !== null ? err.error.message : 'Une erreur s\'est produite lors de la récupération des questions du jeu');
      }
    );
  }


  showQuestion() {

    this.gameSessionStep.forEach(step => {
      //this.resetState();
      this.questionNo += 1;
      this.currentNameElement!.nativeElement.innerHTML =
        this.questionNo + ". " + step.properName.currentNoun;
      this.etymoDescrElement!.nativeElement.innerHTML = step.properName.descrFr;
      step.pCelticRadicals.map((radical) => {
        const etymonButton = document.createElement("button");
        etymonButton.textContent = radical.name.toString();
        etymonButton.setAttribute("title", radical.translation);
        etymonButton.classList.add("etymoBtn2");
        this.etymoNameElement!.nativeElement.appendChild(etymonButton);
      });
      step.proposedLiteralTranslationList.map((answer) => {
        const button = document.createElement("button");
        button.textContent = answer.responseChoice.toString();
        button.classList.add("btn");
        this.answerButtonElement!.nativeElement.appendChild(button);
        if (answer.correctness) {
          button.dataset['correctness'] = "t";
        }
        button.onclick = () => this.selectAnswer(button);
      });
    })

  }

  selectAnswer(selectedBtn: HTMLButtonElement) {
    if (selectedBtn.dataset['correctness'] === "t") {
      
      selectedBtn.classList.add("correct");
      this.score++;
    } else {
      selectedBtn.classList.add("incorrect");
    }
    Array.from(this.answerButtonElement!.nativeElement.children).forEach((button) => {
      if ((button as HTMLButtonElement).dataset['correctness'] === "true") {
        (button as HTMLButtonElement).classList.add("correct");
      }
      (button as HTMLButtonElement).disabled = true;
    });
    this.nextButtonElement!.nativeElement.style.display = "block";
  }

  resetState() {
    this.nextButtonElement!.nativeElement.style.display = "none";
    while (this.answerButtonElement!.nativeElement.firstChild) {
      this.answerButtonElement!.nativeElement.removeChild(this.answerButtonElement!.nativeElement.firstChild);
    }
    this.etymoNameElement!.nativeElement.innerText = "";
  }


showScore() {
  this.resetState();
  /*fetch(host + apiGame + "/saveResult", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ sessionScore: score }),
  })
    .then()
    .then((response) => console.log(response));*/

    this.answerButtonElement!.nativeElement.innerHTML = `You scored ${this.score} out of ${this.gameSessionStep.length}`;
    this.nextButtonElement!.nativeElement.innerHTML = "Play Again";
    this.nextButtonElement!.nativeElement.style.display = "block";
}
  
}

