const questionDisplay = document.querySelector('#questions');
const answerDisplay = document.querySelector('#answer');

const questions = [
  {
    id: 0,
    text: 'Pick a vacation destination:',
    answers: [
      {
        text: 'New York',
        image:
          'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        alt: 'Photo of Times Square with people crossing the street',
        credit: 'Luca Bravo',
      },
      {
        text: 'Austin',
        image:
          'https://images.unsplash.com/photo-1561047725-c5808d089cc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
        alt: 'Photo of an atx sign in Austin',
        credit: 'Tomek Baginski',
      },
      {
        text: 'San Francisco',
        image:
          'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80',
        alt: 'Photo of the Golden Gate Bridge from an aerial perspective',
        credit: 'Maarten can den Heuvel',
      },
      {
        text: 'New Orleans',
        image:
          'https://images.unsplash.com/photo-1568693059993-a239b9cd4957?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80',
        alt: 'Photo of the French Quarter in New Orleans',
        credit: 'Rosie Kerr',
      },
    ],
  },
  {
    id: 1,
    text: 'Pick a vacation destination:',
    answers: [
      {
        text: 'New York',
        image:
          'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        alt: 'Photo of Times Square with people crossing the street',
        credit: 'Luca Bravo',
      },
      {
        text: 'Austin',
        image:
          'https://images.unsplash.com/photo-1561047725-c5808d089cc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
        alt: 'Photo of an atx sign in Austin',
        credit: 'Tomek Baginski',
      },
      {
        text: 'San Francisco',
        image:
          'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80',
        alt: 'Photo of the Golden Gate Bridge from an aerial perspective',
        credit: 'Maarten can den Heuvel',
      },
      {
        text: 'New Orleans',
        image:
          'https://images.unsplash.com/photo-1568693059993-a239b9cd4957?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80',
        alt: 'Photo of the French Quarter in New Orleans',
        credit: 'Rosie Kerr',
      },
    ],
  },
  {
    id: 2,
    text: 'Pick a vacation destination:',
    answers: [
      {
        text: 'New York',
        image:
          'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        alt: 'Photo of Times Square with people crossing the street',
        credit: 'Luca Bravo',
      },
      {
        text: 'Austin',
        image:
          'https://images.unsplash.com/photo-1561047725-c5808d089cc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
        alt: 'Photo of an atx sign in Austin',
        credit: 'Tomek Baginski',
      },
      {
        text: 'San Francisco',
        image:
          'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80',
        alt: 'Photo of the Golden Gate Bridge from an aerial perspective',
        credit: 'Maarten can den Heuvel',
      },
      {
        text: 'New Orleans',
        image:
          'https://images.unsplash.com/photo-1568693059993-a239b9cd4957?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80',
        alt: 'Photo of the French Quarter in New Orleans',
        credit: 'Rosie Kerr',
      },
    ],
  },
];

const populateQuestions = () => {
  questions.forEach((question) => {
    const titleBlock = document.createElement('div');
    titleBlock.id = question.id;
    titleBlock.classList.add('title-block');
    const titleHeading = document.createElement('h2');
    titleHeading.textContent = question.text;
    titleBlock.append(titleHeading);

    questionDisplay.append(titleBlock);
  });
};

populateQuestions();
