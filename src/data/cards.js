const cards = [ 
  ['Action', 'Food', 'Body', 'Animals', 'Clothes', 'Emotions', 'Jobs', 'Fruit'],
  ['action.png', 'food.png', 'body.png', 'clothes.png', 'clothes.png', 'emotions.png', 'jobs.png', 'fruits.png'],
  [
    {
      word: 'cry',
      translation: 'плакать',
      image: 'assets/img/cry.png',
      audioSrc: 'assets/audio/cry.mp3'
    },
    {
      word: 'dance',
      translation: 'танцевать',
      image: 'assets/img/dance.png',
      audioSrc: 'assets/audio/dance.mp3'
    },
    {
      word: 'dive',
      translation: 'нырять',
      image: 'assets/img/dive.png',
      audioSrc: 'assets/audio/dive.mp3'
    },
    {
      word: 'draw',
      translation: 'рисовать',
      image: 'assets/img/draw.png',
      audioSrc: 'assets/audio/draw.mp3'
    },
    {
      word: 'fish',
      translation: 'ловить рыбу',
      image: 'assets/img/fish.png',
      audioSrc: 'assets/audio/fish.mp3'
    },
    {
      word: 'fly',
      translation: 'летать',
      image: 'assets/img/fly.png',
      audioSrc: 'assets/audio/fly.mp3'
    },
    {
      word: 'hug',
      translation: 'обнимать',
      image: 'assets/img/hug.png',
      audioSrc: 'assets/audio/hug.mp3'
    },
    {
      word: 'jump',
      translation: 'прыгать',
      image: 'assets/img/jump.png',
      audioSrc: 'assets/audio/jump.mp3'
    }
  ],
  [
    {
      word: 'cheese',
      translation: 'сыр',
      image: 'assets/img/cheese.png',
      audioSrc: 'assets/audio/cheese.mp3'
    },
    {
      word: 'ice-cream',
      translation: 'мороженое',
      image: 'assets/img/ice-cream.png',
      audioSrc: 'assets/audio/ice-cream.mp3'
    },
    {
      word: 'meat',
      translation: 'мясо',
      image: 'assets/img/meat.png',
      audioSrc: 'assets/audio/meat.mp3'
    },
    {
      word: 'jam',
      translation: 'варенье',
      image: 'assets/img/jam.png',
      audioSrc: 'assets/audio/jam.mp3'
    },
    {
      word: 'bread',
      translation: 'хлеб',
      image: 'assets/img/bread.png',
      audioSrc: 'assets/audio/bread.mp3'
    },
    {
      word: 'pizza',
      translation: 'пицца',
      image: 'assets/img/pizza.png',
      audioSrc: 'assets/audio/pizza.mp3'
    },
    {
      word: 'egg',
      translation: 'яйцо',
      image: 'assets/img/egg.png',
      audioSrc: 'assets/audio/egg.mp3'
    },
    {
      word: 'cake',
      translation: 'торт',
      image: 'assets/img/cake.png',
      audioSrc: 'assets/audio/cake.mp3'
    }
  ],
  [
    {
      word: 'brain',
      translation: 'мозг',
      image: 'assets/img/brain.png',
      audioSrc: 'assets/audio/brain.mp3'
    },
    {
      word: 'stomach',
      translation: 'желудок',
      image: 'assets/img/stomach.png',
      audioSrc: 'assets/audio/stomach.mp3'
    },
    {
      word: 'heart',
      translation: 'сердце',
      image: 'assets/img/heart.png',
      audioSrc: 'assets/audio/heart.mp3'
    },
    {
      word: 'teeth',
      translation: 'зуб',
      image: 'assets/img/teeth.png',
      audioSrc: 'assets/audio/teeth.mp3'
    },
    {
      word: 'lungs',
      translation: 'легкие',
      image: 'assets/img/lungs.png',
      audioSrc: 'assets/audio/lungs.mp3'
    },
    {
      word: 'ear',
      translation: 'ухо',
      image: 'assets/img/ear.png',
      audioSrc: 'assets/audio/ear.mp3'
    },
    {
      word: 'nose',
      translation: 'нос',
      image: 'assets/img/nose.png',
      audioSrc: 'assets/audio/nose.mp3'
    },
    {
      word: 'back',
      translation: 'спина',
      image: 'assets/img/back.png',
      audioSrc: 'assets/audio/back.mp3'
    }
  ],
  [
    {
      word: 'giraffe',
      translation: 'жираф',
      image: 'assets/img/giraffe.png',
      audioSrc: 'assets/audio/giraffe.mp3'
    },
    {
      word: 'snake',
      translation: 'змея',
      image: 'assets/img/snake.png',
      audioSrc: 'assets/audio/snake.mp3'
    },
    {
      word: 'frog',
      translation: 'жаба',
      image: 'assets/img/frog.png',
      audioSrc: 'assets/audio/frog.mp3'
    },
    {
      word: 'crab',
      translation: 'краб',
      image: 'assets/img/crab.png',
      audioSrc: 'assets/audio/crab.mp3'
    },
    {
      word: 'lion',
      translation: 'лев',
      image: 'assets/img/lion.png',
      audioSrc: 'assets/audio/lion.mp3'
    },
    {
      word: 'kangaroo',
      translation: 'кенгру',
      image: 'assets/img/kangaroo.png',
      audioSrc: 'assets/audio/kangaroo.mp3'
    },
    {
      word: 'penguin',
      translation: 'пингвин',
      image: 'assets/img/penguin.png',
      audioSrc: 'assets/audio/penguin.mp3'
    },
    {
      word: 'elephant',
      translation: 'слон',
      image: 'assets/img/elephant.png',
      audioSrc: 'assets/audio/elephant.mp3'
    }
  ],
  [
    {
      word: 'skirt',
      translation: 'юбка',
      image: 'assets/img/skirt.png',
      audioSrc: 'assets/audio/skirt.mp3'
    },
    {
      word: 'pants',
      translation: 'брюки',
      image: 'assets/img/pants.png',
      audioSrc: 'assets/audio/pants.mp3'
    },
    {
      word: 'hat',
      translation: 'шапка',
      image: 'assets/img/hat.png',
      audioSrc: 'assets/audio/hat.mp3'
    },
    {
      word: 'dress',
      translation: 'платье',
      image: 'assets/img/dress.png',
      audioSrc: 'assets/audio/dress.mp3'
    },
    {
      word: 'boot',
      translation: 'ботинок',
      image: 'assets/img/boot.png',
      audioSrc: 'assets/audio/boot.mp3'
    },
    {
      word: 'T-shirt',
      translation: 'футболка',
      image: 'assets/img/tshirt.png',
      audioSrc: 'assets/audio/shirt.mp3'
    },
    {
      word: 'coat',
      translation: 'пальто',
      image: 'assets/img/coat.png',
      audioSrc: 'assets/audio/coat.mp3'
    },
    {
      word: 'shoe',
      translation: 'туфли',
      image: 'assets/img/shoe.png',
      audioSrc: 'assets/audio/shoe.mp3'
    }
  ],
  [
    {
      word: 'sad',
      translation: 'грустный',
      image: 'assets/img/sad.png',
      audioSrc: 'assets/audio/sad.mp3'
    },
    {
      word: 'angry',
      translation: 'сердитый',
      image: 'assets/img/angry.png',
      audioSrc: 'assets/audio/angry.mp3'
    },
    {
      word: 'happy',
      translation: 'счастливый',
      image: 'assets/img/happy.png',
      audioSrc: 'assets/audio/happy.mp3'
    },
    {
      word: 'tired',
      translation: 'уставший',
      image: 'assets/img/tired.png',
      audioSrc: 'assets/audio/tired.mp3'
    },
    {
      word: 'crazy',
      translation: 'сумасшедший',
      image: 'assets/img/crazy.png',
      audioSrc: 'assets/audio/crazy.mp3'
    },
    {
      word: 'scared',
      translation: 'испуганный',
      image: 'assets/img/scared.png',
      audioSrc: 'assets/audio/scared.mp3'
    },
    {
      word: 'smile',
      translation: 'улыбка',
      image: 'assets/img/smile.png',
      audioSrc: 'assets/audio/smile.mp3'
    },
    {
      word: 'laugh',
      translation: 'смех',
      image: 'assets/img/laugh.png',
      audioSrc: 'assets/audio/laugh.mp3'
    }
  ],
  [
    {
      word: 'police',
      translation: 'полиция',
      image: 'assets/img/police.png',
      audioSrc: 'assets/audio/police.mp3'
    },
    {
      word: 'doctor',
      translation: 'доктор',
      image: 'assets/img/doctor.png',
      audioSrc: 'assets/audio/doctor.mp3'
    },
    {
      word: 'painter',
      translation: 'художник',
      image: 'assets/img/painter.png',
      audioSrc: 'assets/audio/painter.mp3'
    },
    {
      word: 'teacher',
      translation: 'учитель',
      image: 'assets/img/teacher.png',
      audioSrc: 'assets/audio/teacher.mp3'
    },
    {
      word: 'astronaut',
      translation: 'космонавт',
      image: 'assets/img/astronaut.png',
      audioSrc: 'assets/audio/astronaut.mp3'
    },
    {
      word: 'boxer',
      translation: 'боксер',
      image: 'assets/img/boxer.png',
      audioSrc: 'assets/audio/boxer.mp3'
    },
    {
      word: 'chef',
      translation: 'повар',
      image: 'assets/img/chef.png',
      audioSrc: 'assets/audio/chef.mp3'
    },
    {
      word: 'pilot',
      translation: 'пилот',
      image: 'assets/img/pilot.png',
      audioSrc: 'assets/audio/pilot.mp3'
    }
  ],
  [
    {
      word: 'orange',
      translation: 'апельсин',
      image: 'assets/img/orange.png',
      audioSrc: 'assets/audio/orange.mp3'
    },
    {
      word: 'pineapple',
      translation: 'ананас',
      image: 'assets/img/pineapple.png',
      audioSrc: 'assets/audio/pineapple.mp3'
    },
    {
      word: 'lemon',
      translation: 'лимон',
      image: 'assets/img/lemon.png',
      audioSrc: 'assets/audio/lemon.mp3'
    },
    {
      word: 'cherry',
      translation: 'вишня',
      image: 'assets/img/cherry.png',
      audioSrc: 'assets/audio/cherry.mp3'
    },
    {
      word: 'strawberry',
      translation: 'клубника',
      image: 'assets/img/strawberry.png',
      audioSrc: 'assets/audio/strawberry.mp3'
    },
    {
      word: 'banana',
      translation: 'банан',
      image: 'assets/img/bananas.png',
      audioSrc: 'assets/audio/bananas.mp3'
    },
    {
      word: 'pear',
      translation: 'груша',
      image: 'assets/img/pear.png',
      audioSrc: 'assets/audio/pear.mp3'
    },
    {
      word: 'apple',
      translation: 'яблоко',
      image: 'assets/img/apple.png',
      audioSrc: 'assets/audio/apple.mp3'
    }
  ]
]

export default cards;