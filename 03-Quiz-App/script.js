  const quizQuestions = [
            {
                question: "What is the capital of France?",
                options: ["London", "Berlin", "Paris", "Madrid"],
                correctAnswer: 2
            },
            {
                question: "Which planet is known as the Red Planet?",
                options: ["Venus", "Mars", "Jupiter", "Saturn"],
                correctAnswer: 1
            },
            {
                question: "What is 2 + 2?",
                options: ["3", "4", "5", "6"],
                correctAnswer: 1
            },
            {
                question: "Who painted the Mona Lisa?",
                options: ["Van Gogh", "Picasso", "Leonardo da Vinci", "Michelangelo"],
                correctAnswer: 2
            },
            {
                question: "What is the largest ocean on Earth?",
                options: ["Atlantic", "Indian", "Arctic", "Pacific"],
                correctAnswer: 3
            },
            {
                question: "Which year did World War II end?",
                options: ["1944", "1945", "1946", "1947"],
                correctAnswer: 1
            },
            {
                question: "What is the smallest country in the world?",
                options: ["Monaco", "Vatican City", "San Marino", "Luxembourg"],
                correctAnswer: 1
            },
            {
                question: "Which element has the chemical symbol 'O'?",
                options: ["Gold", "Oxygen", "Silver", "Iron"],
                correctAnswer: 1
            },
            {
                question: "How many continents are there?",
                options: ["5", "6", "7", "8"],
                correctAnswer: 2
            },
            {
                question: "What is the fastest land animal?",
                options: ["Lion", "Cheetah", "Horse", "Leopard"],
                correctAnswer: 1
            }
        ];

       
        let currentQuestionIndex = 0;
        let userAnswers = [];
        let score = 0;

        
        function startQuiz() {
            
            document.getElementById('startScreen').classList.add('hide');
            document.getElementById('quizContent').style.display = 'block';
            
           
            document.getElementById('totalQuestions').textContent = quizQuestions.length;
            
         
            currentQuestionIndex = 0;
            userAnswers = [];
            score = 0;
            
         
            showQuestion();
        }

       
        function showQuestion() {
            const question = quizQuestions[currentQuestionIndex];
            
  
            document.getElementById('questionCounter').textContent = 
                `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`;
            
           
            const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
            document.getElementById('progressBar').style.width = progress + '%';
            
     
            document.getElementById('question').textContent = question.question;
            
          
            const answersContainer = document.getElementById('answers');
            answersContainer.innerHTML = '';
            
            question.options.forEach((option, index) => {
                const answerDiv = document.createElement('div');
                answerDiv.className = 'answer-option';
                answerDiv.onclick = () => selectAnswer(index);
                
                answerDiv.innerHTML = `
                    <div class="option-letter">${String.fromCharCode(65 + index)}</div>
                    <div>${option}</div>
                `;
                
                answersContainer.appendChild(answerDiv);
            });
            
        
            updateButtons();
        }

        function selectAnswer(selectedIndex) {
        
            const options = document.querySelectorAll('.answer-option');
            options.forEach(option => {
                option.classList.remove('selected');
            });
            
          
            options[selectedIndex].classList.add('selected');
            
        
            userAnswers[currentQuestionIndex] = selectedIndex;
            
      
            document.getElementById('nextBtn').disabled = false;
        }

       
        function nextQuestion() {
           
            if (userAnswers[currentQuestionIndex] === undefined) {
                alert('Please select an answer!');
                return;
            }
            
          
            showAnswerFeedback();
            
           
            setTimeout(() => {
                if (currentQuestionIndex < quizQuestions.length - 1) {
                    currentQuestionIndex++;
                    showQuestion();
                } else {
                    finishQuiz();
                }
            }, 1500);
        }

    
        function showAnswerFeedback() {
            const question = quizQuestions[currentQuestionIndex];
            const userAnswer = userAnswers[currentQuestionIndex];
            const options = document.querySelectorAll('.answer-option');
            
          
            options.forEach(option => {
                option.classList.add('disabled');
                option.onclick = null;
            });
            
        
            options[question.correctAnswer].classList.add('correct');
            
          
            if (userAnswer !== question.correctAnswer) {
                options[userAnswer].classList.add('incorrect');
            }
            
            
            document.getElementById('nextBtn').disabled = true;
        }

     
        function previousQuestion() {
            if (currentQuestionIndex > 0) {
                currentQuestionIndex--;
                showQuestion();
                
           
                if (userAnswers[currentQuestionIndex] !== undefined) {
                    const options = document.querySelectorAll('.answer-option');
                    options[userAnswers[currentQuestionIndex]].classList.add('selected');
                    document.getElementById('nextBtn').disabled = false;
                }
            }
        }

     
        function updateButtons() {
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
     
            prevBtn.disabled = currentQuestionIndex === 0;
            
     
            nextBtn.disabled = userAnswers[currentQuestionIndex] === undefined;
       
            if (currentQuestionIndex === quizQuestions.length - 1) {
                nextBtn.textContent = 'Finish Quiz';
            } else {
                nextBtn.textContent = 'Next →';
            }
        }

     
        function calculateScore() {
            score = 0;
            userAnswers.forEach((answer, index) => {
                if (answer === quizQuestions[index].correctAnswer) {
                    score++;
                }
            });
            return score;
        }

        function finishQuiz() {
         
            const finalScore = calculateScore();
            const percentage = Math.round((finalScore / quizQuestions.length) * 100);
            
   
            document.getElementById('quizContent').style.display = 'none';
            
     
            document.getElementById('resultsScreen').classList.add('show');
       
            document.getElementById('scorePercentage').textContent = percentage + '%';
            document.getElementById('correctAnswers').textContent = finalScore;
            document.getElementById('incorrectAnswers').textContent = quizQuestions.length - finalScore;
            document.getElementById('finalScore').textContent = percentage + '%';
            
     
            let message = '';
            if (percentage >= 90) {
                message = '🏆 Outstanding! You\'re a quiz master!';
            } else if (percentage >= 80) {
                message = '🎉 Excellent work! Great knowledge!';
            } else if (percentage >= 70) {
                message = '👍 Good job! You passed the quiz!';
            } else if (percentage >= 60) {
                message = '📚 Not bad! Keep learning!';
            } else {
                message = '💪 Don\'t give up! Try again!';
            }
            
            document.getElementById('resultsMessage').textContent = message;
        }

   
        function restartQuiz() {
        
            document.getElementById('resultsScreen').classList.remove('show');
            
         
            document.getElementById('startScreen').classList.remove('hide');
            
        
            document.getElementById('progressBar').style.width = '0%';
            
          
            currentQuestionIndex = 0;
            userAnswers = [];
            score = 0;
        }

      
        window.onload = function() {
            console.log('Quiz app loaded successfully!');
            console.log('Total questions:', quizQuestions.length);
        };