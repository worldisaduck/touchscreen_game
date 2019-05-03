var app = new Vue({
  el: "#app",
  data: function() {
    return {
      game_in_progress: false,
      arrow_direction: 'top',
      current_progress: 0,
      current_question: {
      },
      questions: [
        {
          text: 'What % of first degree graduates were in full or part time employment 6 months after graduating?',
          answers: ['67%', '53%'],
          correct_answer: 0
        },
        {
          text: 'What % of postgraduates are in high-skilled employment?',
          answers: ['73%', '56%'],
          correct_answer: 0
        },
        {
          text: 'What is the median salary for postgraduates in employment?',
          answers: ['£33000', '£25000'],
          correct_answer: 0
        },
        {
          text: 'What % of graduates work in the health industry?',
          answers: ['11.2%', '18.9%'],
          correct_answer: 1
        },
        {
          text: '3 years after graduating, how much more likely are you to be in a managerial role if you’ve completed postgraduate studies?',
          answers: ['10%', '20%'],
          correct_answer: 1
        },
        {
          text: 'What % of first degree graduates go on to further study months after graduating?',
          answers: ['16.1%', '9%'],
          correct_answer: 0
        },
        {
          text: 'What proportion of graduates start their career in London?',
          answers: ['19.4%', '22.4%'],
          correct_answer: 1
        },
        {
          text: 'Which of these places employed more graduates?',
          answers: ['Manchester', 'Birmingham'],
          correct_answer: 1
        },
        {
          text: 'What is the total number of graduates in employment in the UK?',
          answers: ['184295', '214211'],
          correct_answer: 0
        },
        {
          text: 'What % of graduates are in sales, marketing and PR roles?',
          answers: ['14.3%', '10.1%'],
          correct_answer: 1
        },
        {
          text: 'What % of the opportunities offered by the 100 leading graduate recruiters were in business, HR and finance?',
          answers: ['37%', '23%'],
          correct_answer: 0
        },
        {
          text: 'Typically, which graduates earn the higher starting salary?',
          answers: ['IT', 'Architecture'],
          correct_answer: 0
        },
        {
          text: 'What % of IT graduates work in retail and catering?',
          answers: ['4.9%', '7.3%'],
          correct_answer: 0
        },
        {
          text: 'What % of Maths graduates work in IT?',
          answers: ['12%', '18%'],
          correct_answer: 0
        },
        {
          text: 'What % of civil engineering graduates are employed as building professionals or engineers?',
          answers: ['63.4%', '74.8%'],
          correct_answer: 1
        },
        {
          text: 'Which graduates have the higher average starting salary?',
          answers: ['English', 'Philosophy'],
          correct_answer: 1
        },
        {
          text: 'What % of language graduates work overseas?',
          answers: ['9.1%', '11%'],
          correct_answer: 0
        },
        {
          text: 'What % of history graduates go on to take further study?',
          answers: ['25%', '27.5%'],
          correct_answer: 1
        },
        {
          text: 'How much did the UK government invest in 2018 to support maths, digital and technical education?',
          answers: ['£406M', '£256M'],
          correct_answer: 0
        },
        {
          text: 'What type of work are more English graduates employed in?',
          answers: ['Sales and marketing', 'Retail and catering'],
          correct_answer: 1
        },
        {
          text: 'What % of history graduates go on to work in education?',
          answers: ['4.4%', '11.1%'],
          correct_answer: 0
        },
        {
          text: 'Do more biology graduates or chemistry graduates go on to work as science professionals?',
          answers: ['Biology', 'Chemistry'],
          correct_answer: 1
        },
        {
          text: 'What % of physics graduates go on to work in IT?',
          answers: ['18%', '21%'],
          correct_answer: 1
        },
        {
          text: 'Which science graduates typically earn the highest starting salaries?',
          answers: ['Physics', 'Chemistry'],
          correct_answer: 0
        },
        {
          text: 'What % of biology graduates go on to work in business, HR and finance?',
          answers: ['4.3%', '9.6%'],
          correct_answer: 1
        },
        {
          text: 'Are there more male or female geography graduates in employment?',
          answers: ['Male', 'Female'],
          correct_answer: 1
        },
        {
          text: 'What % of law graduates go on to work in legal, social and welfare positions?',
          answers: ['36.1%', '41.7%'],
          correct_answer: 0
        },
        {
          text: 'Which graduates typically earn the most 5 years after graduating?',
          answers: ['Law', 'Computer science'],
          correct_answer: 1
        },
        {
          text: 'Which graduates typically earn the most 5 years after graduating?',
          answers: ['Economics', 'Medicine and Dentistry'],
          correct_answer: 1
        },
        {
          text: 'Which country has the higher median starting salary for graduates?',
          answers: ['Scotland', 'England'],
          correct_answer: 0
        },
        {
          text: 'Which region has the higher % of university leavers earning more than £21000',
          answers: ['West Midlands', 'East Midlands'],
          correct_answer: 0
        },
        {
          text: 'Which university’s students have the higher median starting salary, 5 years after graduating?',
          answers: ['Oxford', 'London School of Economics'],
          correct_answer: 1
        }
      ]
    }
  },
  mounted: function() {
    this.current_question = this.questions[0]
  },
  methods: {
    recordAnswer: function(answerIndex) {
      if (this.current_progress == 75) {
        this.game_in_progress = false;
        this.current_progress = 0;
      } else {
        let positions = ['left', 'right'];
        this.changeDirection(positions[answerIndex]);
        this.current_question = this.questions[Math.floor(Math.random() * 10) + 1];
        if (this.current_question.correct_answer == answerIndex) this.current_progress += 25;
      };
    },
    changeDirection: function(direction) {
      this.questions.length
      this.arrow_direction = direction;
    },
    arrowDirection: function() {
      return 'assets/new_images/arrow_' + this.arrow_direction + '.png';
    },
    progressArrow: function() {
      return 'assets/new_images/progress_arrow_' + this.current_progress + '.png';
    },
    startGame: function() {
      this.game_in_progress = true;
    }
  }
});