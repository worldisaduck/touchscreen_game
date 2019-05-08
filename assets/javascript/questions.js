new Vue({
  el: "#questions",
  data: function() {
    return {
      username: '',
      stage: 'start',
      gameStarted: false,
      currentProgress: 0,
      showQuestion: true,
      time: 0,
      currentSection: 0,
      screenResposive: true,
      currentQuestion: {
      },
      questions: [
        [
          {
            text: "3 years after graduating, how much more likely are you to be in a managerial role if you've completed postgraduate studies?",
            answers: ['10%', '15%', '20%'],
            correct_answer: 2
          },
          {
            text: 'Up to the age of 30, what is the average annual gap in salary between non-graduates and undergraduates?',
            answers: ['&pound;2000', '&pound;4000', '&pound;8000'],
            correct_answer: 1
          },
          {
            text: 'Up to the age of 30, what is the average annual gap in salary between non-graduates and postgraduates?',
            answers: ['&pound;5000', '&pound;7000', '&pound;9000'],
            correct_answer: 2
          },
          {
            text: 'What % of first degree graduates go on to further study 6 months after graduating?',
            answers: ['6.1%', '25.8%', '33.1%'],
            correct_answer: 0
          },
          {
            text: 'What % of first degree graduates were in full or part time employment 6 months after graduating?',
            answers: ['38%', '53%', '67%'],
            correct_answer: 2
          }
        ],
        [
          {
            text: 'What is the median salary for postgraduates in employment?',
            answers: ['&pound;25000', '&pound;28000', '&pound;33000'],
            correct_answer: 2
          },
          {
            text: 'What % of postgraduates are in high-skilled employment?',
            answers: ['56%', '73%', '89%'],
            correct_answer: 1
          },
          {
            text: 'What % of history graduates go on to take further study?',
            answers: ['21.1%', '25%', '27.5%'],
            correct_answer: 2
          },
          {
            text: "Which university's students have the higher median starting salary, 5 years after graduating?",
            answers: ['LSE', 'Oxford', 'Cambridge'],
            correct_answer: 0
          },
          {
            text: 'Which postgraduates earn the higher starting salary?',
            answers: ['Architecture', 'IT', 'History'],
            correct_answer: 2
          }
        ],
        [
          {
            text: 'How much did the UK government invest in 2018 to support maths, digital and technical education?',
            answers: ['&pound;120M', '&pound;256M', '&pound;406M'],
            correct_answer: 2
          },
          {
            text: 'Which country has the higher median starting salary for graduates?',
            answers: ['Scotland', 'England', 'Wales'],
            correct_answer: 0
          },
          {
            text: 'What % of the opportunities with the 100 leading graduate recruiters were in business, HR and finance?',
            answers: ['15%', '23%', '37%'],
            correct_answer: 2
          },
          {
            text: 'Which graduates typically earn the most 5 years after graduating?',
            answers: ['Medicine/Dentistry', 'Economics', 'Computer Science'],
            correct_answer: 0
          },
          {
            text: 'Which graduates typically earn the most 5 years after graduating?',
            answers: ['Business', 'Law', 'Biological Sciences'],
            correct_answer: 1
          }
        ]
      ]
    }
  },
  mounted: function() {
    this.currentQuestion = this.randomQuestion();
  },
  methods: {
    recordAnswer: function(answerIndex) {
      if (this.screenResposive) {
        this.screenResposive = false;
        this.currentSection++;

        this.rotateArrow(answerIndex);

        setTimeout(() => {
          this.showQuestion = false;
          setTimeout(() => {
            if (this.currentSection == 3) {
              this.sleep(3000);
              this.stage = 'result';
            } else {
              this.changeQuestion();
            }
          }, 700)
        }, 1400);


        if (this.currentQuestion.correct_answer == answerIndex) this.currentProgress += 25;
      }
    },
    rotateArrow: function(answerIndex) {
      const degree = [-90, 0, 90][answerIndex];
      const pointingArrow = document.getElementById('pointing-arrow');

      if (degree == -90) {
        for (turn = 0; turn >= degree; turn--) {
          (function(ind) {
            setTimeout(() => { pointingArrow.style.transform = "rotate("+ (ind % 360) +"deg)"; }, 3 * Math.abs(ind));
          })(turn);
        }
      } else if (degree == 90) {
        for (turn = 0; turn <= degree; turn++) {
          (function(ind) {
            setTimeout(() => { pointingArrow.style.transform = "rotate("+ (ind % 360) +"deg)"; }, 3 * Math.abs(ind));
          })(turn);
        }
      } else {
        for (turn = 0; turn <= degree; turn++) {
          (function(ind) {
            setTimeout(() => { pointingArrow.style.transform = "rotate("+ (ind % 360) +"deg)"; }, 3 * Math.abs(ind));
          })(turn);
        }
      }
    },
    arrowDirection: function() {
      return 'assets/new_images/arrow_' + this.arrow_direction + '.png';
    },
    progressArrow: function() {
      return 'assets/new_images/progress_arrow_' + this.currentProgress + '.png';
    },
    startGame: function() {
      this.stage = 'game-in-progress';
      this.gameStarted = true;
    },
    sleep: function(delay) {
      let start = new Date().getTime();
      while (new Date().getTime() < start + delay);
    },
    randomQuestion: function() {
      return this.questions[this.currentSection][Math.floor(Math.random() * 5)];
    },
    changeQuestion: function() {
      this.currentQuestion = this.randomQuestion();
      this.showQuestion = true;
      this.screenResposive = true;
    },
    setupNewGame: function() {
      this.stage = 'start';
      this.username = '';
      this.currentProgress = 0;
      this.currentSection = 0;
      this.changeQuestion();
    },
    timer: function() {
      if (this.stage == 'game-in-progress') {
        this.time++
        setTimeout(() => {
          this.timer();
        }, 1000)
      }
    },
    sortedLeaderboard: function() {
      let sortedLeaderboard = {};
      let leaderboard = window.localStorage
      let names = Object.keys(leaderboard);

      let sortedNames = names.sort((a, b) => { return leaderboard[a] - leaderboard[b] });

      for (i in sortedNames) {
        let name = sortedNames[i];
        sortedLeaderboard[name] = this.formattedTime(leaderboard[name]);
      }

      return sortedLeaderboard;
    },
    saveTime: function() {
      window.localStorage.setItem(this.username, this.time);
      this.stage = 'leaderboard'
    },
    formattedTime: function(timeInSeconds) {
      let hours = Math.floor(timeInSeconds / 3600);
      let minutes = Math.floor(timeInSeconds / 60) % 60;
      let seconds = (timeInSeconds % 3600) % 60;

      let secondsString = JSON.stringify(seconds).length > 1 ? seconds : `0${seconds}`;
      let minutesString = JSON.stringify(minutes) > 1 ? minutes : `0${minutes}`;
      
      return `${minutesString}:${secondsString}`
    }
  },
  watch: {
    stage: function(newState, oldState) {
      if (newState == 'game-in-progress') {
        this.time = 0;
        this.timer()
      }
    }
  }
});
