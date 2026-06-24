const VOCAB_COLORS = {
  GOD:'#f9c8d4', LIGHT:'#fff3a3', DARK:'#c8d4f9', EVENING:'#f9d4c8',
  MORNING:'#c8f9e0', DAY:'#fde8a0', NIGHT:'#d4c8f9',
  LAND:'#d4f0c8', WATER:'#a3e4f9', SEAS:'#a3c8f9', TREE:'#b8f0c0',
  FRUIT:'#f9c8a3', SEED:'#e0d4a3', GOOD:'#f9e8a3',
  FISH:'#a3d8f9', BIRD:'#f9d4e8', CREATURE:'#d4e8f9',
  WILD:'#f0c8a3', KINDS:'#c8f0d4', LIVESTOCK:'#e8d4a3', BLESSED:'#f9c8f0',
  IMAGE:'#f9e0c8', RULE:'#c8d8f9', MADE:'#d8f9c8', REST:'#e8c8f9',
  HOLY:'#fff0a3', PEOPLE:'#f9c8c8', FINISH:'#c8f9f0'
};
const VOCAB_ZH = {
  GOD:'神', LIGHT:'光', DARK:'暗', EVENING:'晚上', MORNING:'早晨',
  DAY:'晝', NIGHT:'夜', LAND:'旱地', WATER:'水', SEAS:'海',
  TREE:'樹木', FRUIT:'果子', SEED:'種子', GOOD:'好',
  FISH:'魚', BIRD:'雀鳥', CREATURE:'活物', WILD:'野獸',
  KINDS:'各類', LIVESTOCK:'牲畜', BLESSED:'賜福',
  IMAGE:'形象', RULE:'治理', MADE:'造', REST:'安息',
  HOLY:'聖', PEOPLE:'人', FINISH:'完畢'
};

// ─────────────────────────────────────────────
// SLIDE DATA
// ─────────────────────────────────────────────
const days = [
  {
    titleSlide: {
      image: 'Slideshows/Day1/day1_00_title.jpeg',
      title: 'God Created Light and the Sky',
      verseEn: '"In the beginning God created the heavens and the earth." (Genesis 1:1)',
      verseZh: '起初，神創造天地。（創世記 1:1）',
      vocab: ['GOD','LIGHT','DARK','EVENING','MORNING','DAY','NIGHT']
    },
    verseSlides: [
      {
        ref: 'Genesis 1:1',
        image: 'Slideshows/Day1/Genesis_1-1.jpg',
        keyEn: 'God made everything.',
        keyZh: '神創造了萬物。',
        verseEn: 'In the beginning, God created the heavens and the earth.',
        verseZh: '起初，神創造天地。',
        vocab: ['GOD']
      },
      {
        ref: 'Genesis 1:2',
        image: 'Slideshows/Day1/Genesis_1-2.jpg',
        keyEn: 'In the beginning, it was dark.',
        keyZh: '起初，一片黑暗。',
        verseEn: 'The earth was without form and void, and darkness was over the face of the deep. And the Spirit of God was hovering over the face of the waters.',
        verseZh: '地是空虛混沌，淵面黑暗；神的靈運行在水面上。',
        vocab: ['DARK']
      },
      {
        ref: 'Genesis 1:3',
        image: 'Slideshows/Day1/Genesis_1-3.jpg',
        keyEn: 'God made light!',
        keyZh: '神造了光！',
        verseEn: 'And God said, "Let there be light," and there was light.',
        verseZh: '神說，要有光，就有了光。',
        vocab: ['LIGHT']
      },
      {
        ref: 'Genesis 1:4–5',
        image: 'Slideshows/Day1/Genesis_1-4-5.jpg',
        keyEn: 'God made day and night.',
        keyZh: '神造了白晝和黑夜。',
        verseEn: 'God saw that the light was good, and he separated the light from the darkness. God called the light Day, and the darkness he called Night. And there was evening and there was morning, the first day.',
        verseZh: '神看光是好的，就把光暗分開了。神稱光為晝，稱暗為夜。有晚上，有早晨，這是頭一日。',
        vocab: ['DAY','NIGHT','EVENING','MORNING']
      },
      {
        ref: 'Genesis 1:6–8',
        image: 'Slideshows/Day1/Genesis_1-6-8.jpg',
        keyEn: 'God made the sky.',
        keyZh: '神造了天空。',
        verseEn: 'And God said, "Let there be an expanse in the midst of the waters, and let it separate the waters from the waters." And God made the expanse and separated the waters that were under the expanse from the waters that were above the expanse. And it was so. And God called the expanse Heaven. And there was evening and there was morning, the second day.',
        verseZh: '神說，諸水之間要有穹蒼，將水分為上下。神就造出穹蒼，將穹蒼以下的水，和穹蒼以上的水分開了，事就這樣成了。神稱穹蒼為天。有晚上，有早晨，是第二日。',
        vocab: ['EVENING','MORNING']
      }
    ]
  },
  {
    titleSlide: {
      image: 'Slideshows/Day2/day2_00_title.jpeg',
      title: 'God Created Land and Plants',
      verseEn: '"God saw that it was good." (Genesis 1:10)',
      verseZh: '神看著是好的。（創世記 1:10）',
      vocab: ['LAND','WATER','SEAS','TREE','FRUIT','SEED','GOOD']
    },
    verseSlides: [
      {
        ref: 'Genesis 1:9',
        image: 'Slideshows/Day2/Genesis_1-9.jpeg',
        keyEn: 'God made land and seas.',
        keyZh: '神造了旱地和海。',
        verseEn: 'And God said, "Let the waters under the heavens be gathered together into one place, and let the dry land appear." And it was so.',
        verseZh: '神說，天下的水要聚在一處，使旱地露出來，事就這樣成了。',
        vocab: ['LAND','WATER','SEAS']
      },
      {
        ref: 'Genesis 1:10',
        image: 'Slideshows/Day2/Genesis_1-10.jpeg',
        keyEn: 'God saw that it was good.',
        keyZh: '神看著是好的。',
        verseEn: 'God called the dry land Earth, and the waters that were gathered together he called Seas. And God saw that it was good.',
        verseZh: '神稱旱地為地，稱水的聚處為海。神看著是好的。',
        vocab: ['LAND','SEAS','GOOD']
      },
      {
        ref: 'Genesis 1:11–12',
        image: 'Slideshows/Day2/Genesis_1-11-12.jpeg',
        keyEn: 'God made plants and trees.',
        keyZh: '神造了植物和樹木。',
        verseEn: 'And God said, "Let the earth sprout vegetation, plants yielding seed, and fruit trees bearing fruit in which is their seed, each according to its kind, on the earth." And it was so. The earth brought forth vegetation, plants yielding seed according to their own kinds, and trees bearing fruit in which is their seed, each according to its kind. And God saw that it was good.',
        verseZh: '神說，地要生出青草和結種子的蔬菜，並結果子的樹木，各從其類，果子都包著核，在地上，事就這樣成了。於是地生出了青草和結種子的蔬菜，各從其類，並結果子的樹木，各從其類，果子都包著核。神看著是好的。',
        vocab: ['TREE','FRUIT','SEED']
      },
      {
        ref: 'Genesis 1:13',
        image: 'Slideshows/Day2/Genesis_1-13.jpeg',
        keyEn: 'Evening and morning — the third day.',
        keyZh: '有晚上有早晨，是第三日。',
        verseEn: 'And there was evening and there was morning, the third day.',
        verseZh: '有晚上，有早晨，是第三日。',
        vocab: ['GOOD']
      }
    ]
  },
  {
    titleSlide: {
      image: 'Slideshows/Day3/day3_00_title.jpeg',
      title: 'God Created Animals',
      verseEn: '"God created all kinds of animals." (Genesis 1:21)',
      verseZh: '神造出各樣活物，各從其類。（創世記 1:21）',
      vocab: ['FISH','BIRD','CREATURE','WILD','KINDS','LIVESTOCK','BLESSED']
    },
    verseSlides: [
      {
        ref: 'Genesis 1:20',
        image: 'Slideshows/Day3/Genesis_1-20.jpeg',
        keyEn: 'God made fish and birds.',
        keyZh: '神造了魚和鳥。',
        verseEn: 'And God said, "Let the waters swarm with swarms of living creatures, and let birds fly above the earth across the expanse of the heavens."',
        verseZh: '神說，水要多多滋生有生命的物，要有雀鳥飛在地面以上，天空之中。',
        vocab: ['FISH','BIRD','CREATURE']
      },
      {
        ref: 'Genesis 1:21',
        image: 'Slideshows/Day3/Genesis_1-21.jpeg',
        keyEn: 'God created all kinds of creatures.',
        keyZh: '神造出各樣的活物。',
        verseEn: 'So God created the great sea creatures and every living creature that moves, with which the waters swarm, according to their kinds, and every winged bird according to its kind. And God saw that it was good.',
        verseZh: '神就造出大魚和水中所滋生各樣有生命的動物，各從其類，又造出各樣飛鳥，各從其類。神看著是好的。',
        vocab: ['FISH','BIRD','CREATURE','KINDS']
      },
      {
        ref: 'Genesis 1:22–23',
        image: 'Slideshows/Day3/Genesis_1-22-23.jpeg',
        keyEn: 'God blessed the animals.',
        keyZh: '神賜福給動物。',
        verseEn: 'And God blessed them, saying, "Be fruitful and multiply and fill the waters in the seas, and let birds multiply on the earth." And there was evening and there was morning, the fifth day.',
        verseZh: '神賜福給這一切，說，滋生繁多，充滿海中的水，雀鳥也要多生在地上。有晚上，有早晨，是第五日。',
        vocab: ['KINDS','BLESSED']
      },
      {
        ref: 'Genesis 1:24–25',
        image: 'Slideshows/Day3/Genesis_1-24-25.jpeg',
        keyEn: 'God made land animals.',
        keyZh: '神造了地上的動物。',
        verseEn: 'And God said, "Let the earth bring forth living creatures according to their kinds — livestock and creeping things and beasts of the earth according to their kinds." And it was so. And God made the beasts of the earth according to their kinds and the livestock according to their kinds, and everything that creeps on the ground according to its kind. And God saw that it was good.',
        verseZh: '神說，地要生出活物來，各從其類，牲畜、昆蟲、野獸，各從其類。事就這樣成了。於是神造出野獸，各從其類，牲畜，各從其類，地上一切昆蟲，各從其類。神看著是好的。',
        vocab: ['WILD','KINDS','LIVESTOCK']
      }
    ]
  },
  {
    titleSlide: {
      image: 'Slideshows/Day4/day4_00_title.jpeg',
      title: 'God Created People & the Sabbath',
      verseEn: '"I am wonderfully made." (Psalm 139:14)',
      verseZh: '我受造奇妙可畏。（詩篇 139:14）',
      vocab: ['IMAGE','RULE','MADE','REST','HOLY','PEOPLE','FINISH']
    },
    verseSlides: [
      {
        ref: 'Genesis 1:26–27',
        image: 'Slideshows/Day4/Genesis_1-26-27.jpeg',
        keyEn: 'God made people in His image.',
        keyZh: '神按自己的形象造人。',
        verseEn: 'Then God said, "Let us make man in our image, after our likeness. And let them have dominion over the fish of the sea and over the birds of the heavens and over the livestock and over all the earth and over every creeping thing that creeps on the earth." So God created man in his own image, in the image of God he created him; male and female he created them.',
        verseZh: '神說，我們要照著我們的形象，按著我們的樣式造人，使他們管理海裡的魚、空中的鳥、地上的牲畜，和全地，並地上所爬的一切昆蟲。神就照著自己的形象造人，乃是照著他的形象造男造女。',
        vocab: ['IMAGE','MADE','PEOPLE']
      },
      {
        ref: 'Genesis 1:28',
        image: 'Slideshows/Day4/Genesis_1-28.jpeg',
        keyEn: 'God told people to rule and care.',
        keyZh: '神讓人治理和照顧世界。',
        verseEn: 'And God blessed them. And God said to them, "Be fruitful and multiply and fill the earth and subdue it, and have dominion over the fish of the sea and over the birds of the heavens and over every living thing that moves on the earth."',
        verseZh: '神就賜福給他們，又對他們說，要生養眾多，遍滿地面，治理這地，也要管理海裡的魚、空中的鳥，和地上各樣行動的活物。',
        vocab: ['RULE','PEOPLE']
      },
      {
        ref: 'Genesis 1:29–31',
        image: 'Slideshows/Day4/Genesis_1-29-31.jpeg',
        keyEn: 'God provided food for everyone.',
        keyZh: '神為眾人預備了食物。',
        verseEn: 'And God said, "Behold, I have given you every plant yielding seed that is on the face of all the earth, and every tree with seed in its fruit. You shall have them for food. And to every beast of the earth and to every bird of the heavens and to everything that creeps on the earth, everything that has the breath of life, I have given every green plant for food." And it was so. And God saw everything that he had made, and behold, it was very good. And there was evening and there was morning, the sixth day.',
        verseZh: '神說，看哪，我將遍地一切結種子的蔬菜，和一切樹上所結有核的果子，全賜給你們作食物。至於地上的走獸和空中的飛鳥，並各樣爬在地上有生命的物，我將青草賜給牠們作食物。事就這樣成了。神看著一切所造的都甚好。有晚上，有早晨，是第六日。',
        vocab: ['MADE','FINISH']
      },
      {
        ref: 'Genesis 2:1–2',
        image: 'Slideshows/Day4/Genesis_2-1-2.jpeg',
        keyEn: 'God rested on the seventh day.',
        keyZh: '神在第七日安息。',
        verseEn: 'Thus the heavens and the earth were finished, and all the host of them. And on the seventh day God finished his work that he had done, and he rested on the seventh day from all his work that he had done.',
        verseZh: '天地萬物都造齊了。到第七日，神造物的工已經完畢，就在第七日歇了他一切的工，安息了。',
        vocab: ['REST','FINISH']
      },
      {
        ref: 'Genesis 2:3',
        image: 'Slideshows/Day4/Genesis_2-3.jpeg',
        keyEn: 'God made the seventh day holy.',
        keyZh: '神使第七日成為聖日。',
        verseEn: 'So God blessed the seventh day and made it holy, because on it God rested from all his work that he had done in creation.',
        verseZh: '神賜福給第七日，定為聖日，因為在這日神歇了他一切創造的工，就安息了。',
        vocab: ['REST','HOLY']
      }
    ]
  }
];
