var lessonPlanUrl = "2/lesson_plan.pdf";

var VOCAB_COLORS = {
  // Day 1 slides
  GOD:        '#f9c8d4',
  HEAVEN:     '#c8d4f9',
  EARTH:      '#d4f0c8',
  LIGHT:      '#fff3a3',
  DARK:       '#b8c4e8',
  NIGHT:      '#d4c8f9',
  ONE:        '#fde8a0',
  FIRST:      '#f9d4c8',
  // Day 2 slides
  WATER:      '#a3e4f9',
  SKY:        '#a3c8f9',
  SEPARATE:   '#c8f9f0',
  TWO:        '#f9c8e8',
  SECOND:     '#e8c8f9',
  // Day 3 slides
  LAND:       '#d4e8c8',
  SEAS:       '#a3d4f9',
  GROUND:     '#e0d4a3',
  PLANT:      '#b8f0c0',
  TREE:       '#c8f0d4',
  SEED:       '#f0e8a3',
  THREE:      '#f9d8c8',
  THIRD:      '#d8c8f9',
  // Day 4 slides
  SUN:        '#fff0a3',
  MOON:       '#e8e8c8',
  STAR:       '#f9f0c8',
  FOUR:       '#f9c8b8',
  FOURTH:     '#c8b8f9',
  // Day 5 slides
  FISH:       '#a3d8f9',
  BIRD:       '#f9d4e8',
  SWIM:       '#a3f0f9',
  FILL:       '#c8f9e8',
  MULTIPLY:   '#d4f9c8',
  SING:       '#f9e8d4',
  FIVE:       '#f9e0c8',
  FIFTH:      '#e0c8f9',
  // Day 6 slides
  ANIMAL:     '#f0c8d4',
  WILD:       '#f0c8a3',
  CRAWL:      '#e8d4b8',
  IMAGE:      '#f9e0c8',
  MAN:        '#c8d8f9',
  RULE:       '#c8f9d8',
  SIX:        '#f9c8c8',
  SIXTH:      '#c8c8f9',
  // Day 7 slides
  GOOD:       '#f9e8a3',
  MADE:       '#d8f9c8',
  EVERYTHING: '#f9d4f0',
  REST:       '#e8c8f9',
  HOLY:       '#fff0a3',
  FINISHED:   '#c8f9f0',
  SEVEN:      '#f9d8e8',
  SEVENTH:    '#d8e8f9'
};

var VOCAB_ZH = {
  GOD:        '神',
  HEAVEN:     '天',
  EARTH:      '地',
  LIGHT:      '光',
  DARK:       '暗',
  NIGHT:      '夜',
  ONE:        '一',
  FIRST:      '頭一',
  WATER:      '水',
  SKY:        '天空',
  SEPARATE:   '分開',
  TWO:        '二',
  SECOND:     '第二',
  LAND:       '旱地',
  SEAS:       '海',
  GROUND:     '地面',
  PLANT:      '植物',
  TREE:       '樹木',
  SEED:       '種子',
  THREE:      '三',
  THIRD:      '第三',
  SUN:        '太陽',
  MOON:       '月亮',
  STAR:       '星',
  FOUR:       '四',
  FOURTH:     '第四',
  FISH:       '魚',
  BIRD:       '雀鳥',
  SWIM:       '游',
  FILL:       '充滿',
  MULTIPLY:   '滋生',
  SING:       '鳴',
  FIVE:       '五',
  FIFTH:      '第五',
  ANIMAL:     '動物',
  WILD:       '野獸',
  CRAWL:      '爬行',
  IMAGE:      '形像',
  MAN:        '人',
  RULE:       '治理',
  SIX:        '六',
  SIXTH:      '第六',
  GOOD:       '好',
  MADE:       '造',
  EVERYTHING: '一切',
  REST:       '安息',
  HOLY:       '聖',
  FINISHED:   '完畢',
  SEVEN:      '七',
  SEVENTH:    '第七'
};

var days = [
  // ─────────────────────────────────────────────
  // LESSON 1 — Creation Days 1 & 2
  // ─────────────────────────────────────────────
  {
    titleSlide: {
      image:   'Slideshows/Day1/day1_00_title.jpeg',
      titleEn: 'God Created Light and the Sky',
      titleZh: '神創造了光和天空',
      verseEn: '"In the beginning God created the heavens and the earth." (Genesis 1:1)',
      verseZh: '起初，神創造天地。（創世記 1:1）',
      vocab:   ['GOD','HEAVEN','EARTH','LIGHT','DARK','NIGHT','ONE','FIRST','WATER','SKY','SEPARATE','TWO','SECOND']
    },
    verseSlides: [
            {
        ref:          'Genesis 1:1–5',
        image:        'Slideshows/Day1/Genesis_1-1.jpg',
        keyEn:        'In the beginning, God made the heavens and the earth.',
        keyZh:        '起初，上帝創造了天和地。',
        verseEn:      'In the beginning, God created the heavens and the earth. The earth was without form and void, and darkness was over the face of the deep. And the Spirit of God was hovering over the face of the waters. And God said, "Let there be light," and there was light. And God saw that the light was good. And God separated the light from the darkness. God called the light Day, and the darkness he called Night. And there was evening and there was morning, the first day.',
        verseZh:      '起初，神創造天地。地是空虛混沌，淵面黑暗；神的靈運行在水面上。神說：「要有光」，就有了光。神看光是好的，就把光暗分開了。神稱光為晝，稱暗為夜。有晚上，有早晨，這是頭一日。',
        vocab:        ['GOD','HEAVEN','EARTH'],
        keyOnlyVocab: []
      },
            {
        ref:          'Genesis 1:1–5',
        image:        'Slideshows/Day1/Genesis_1-4-5.jpg',
        keyEn:        'God moved over the darkness and said, "Light!" He called the light "Day" and He called the darkness "Night".',
        keyZh:        '上帝在黑暗中運行，祂說：「光！」祂就把光稱作「白天」，把黑暗稱作「夜晚」。',
        verseEn:      'In the beginning, God created the heavens and the earth. The earth was without form and void, and darkness was over the face of the deep. And the Spirit of God was hovering over the face of the waters. And God said, "Let there be light," and there was light. And God saw that the light was good. And God separated the light from the darkness. God called the light Day, and the darkness he called Night. And there was evening and there was morning, the first day.',
        verseZh:      '起初，神創造天地。地是空虛混沌，淵面黑暗；神的靈運行在水面上。神說：「要有光」，就有了光。神看光是好的，就把光暗分開了。神稱光為晝，稱暗為夜。有晚上，有早晨，這是頭一日。',
        vocab:        ['LIGHT','DARK','NIGHT'],
        keyOnlyVocab: []
      },
            {
        ref:          'Genesis 1:1–5',
        image:        'Slideshows/Day1/Genesis_1-4-5.jpg',
        keyEn:        'Day One! Done!',
        keyZh:        '這是第一天！',
        verseEn:      'In the beginning, God created the heavens and the earth. The earth was without form and void, and darkness was over the face of the deep. And the Spirit of God was hovering over the face of the waters. And God said, "Let there be light," and there was light. And God saw that the light was good. And God separated the light from the darkness. God called the light Day, and the darkness he called Night. And there was evening and there was morning, the first day.',
        verseZh:      '起初，神創造天地。地是空虛混沌，淵面黑暗；神的靈運行在水面上。神說：「要有光」，就有了光。神看光是好的，就把光暗分開了。神稱光為晝，稱暗為夜。有晚上，有早晨，這是頭一日。',
        vocab:        ['ONE','FIRST'],
        keyOnlyVocab: []
      },
            {
        ref:          'Genesis 1:6–8',
        image:        'Slideshows/Day2/Genesis_1-9.jpeg',
        keyEn:        'Then God made a space to separate the waters above from the waters below. He called the space "Sky".',
        keyZh:        '接著，上帝創造了一個空間，把上面的水和下面的水分開。祂把這個空間稱作「天空」。',
        verseEn:      'And God said, "Let there be an expanse in the midst of the waters, and let it separate the waters from the waters." And God made the expanse and separated the waters that were under the expanse from the waters that were above the expanse. And it was so. And God called the expanse Heaven. And there was evening and there was morning, the second day.',
        verseZh:      '神說：「諸水之間要有穹蒼，將水分為上下。」神就造出穹蒼，將穹蒼以下的水和穹蒼以上的水分開了。事就這樣成了。神稱穹蒼為天。有晚上，有早晨，是第二日。',
        vocab:        ['WATER','SKY','SEPARATE'],
        keyOnlyVocab: []
      },
            {
        ref:          'Genesis 1:6–8',
        image:        'Slideshows/Day2/Genesis_1-9.jpeg',
        keyEn:        'Day Two! Done!',
        keyZh:        '這是第二天！',
        verseEn:      'And God said, "Let there be an expanse in the midst of the waters, and let it separate the waters from the waters." And God made the expanse and separated the waters that were under the expanse from the waters that were above the expanse. And it was so. And God called the expanse Heaven. And there was evening and there was morning, the second day.',
        verseZh:      '神說：「諸水之間要有穹蒼，將水分為上下。」神就造出穹蒼，將穹蒼以下的水和穹蒼以上的水分開了。事就這樣成了。神稱穹蒼為天。有晚上，有早晨，是第二日。',
        vocab:        ['TWO','SECOND'],
        keyOnlyVocab: []
      }
    ]
  },

  // ─────────────────────────────────────────────
  // LESSON 2 — Creation Days 3 & 4
  // ─────────────────────────────────────────────
  {
    titleSlide: {
      image:   'Slideshows/Day2/day2_00_title.jpeg',
      titleEn: 'God Created Land and Plants',
      titleZh: '神創造了大地和植物',
      verseEn: '"God saw that it was good." (Genesis 1:10)',
      verseZh: '神看著是好的。（創世記 1:10）',
      vocab:   ['LAND','SEAS','GROUND','PLANT','TREE','SEED','THREE','THIRD','SUN','MOON','STAR','FOUR','FOURTH']
    },
    verseSlides: [
            {
        ref:          'Genesis 1:9–13',
        image:        'Slideshows/Day2/Genesis_1-10.jpeg',
        keyEn:        'God gathered the waters together, and dry ground appeared. He called the ground "Land" and the waters "Seas".',
        keyZh:        '上帝把水聚集在一起，乾乾的土地就露了出來。祂把土地稱作「陸地」，把水稱作「海洋」。',
        verseEn:      'And God said, "Let the waters under the heavens be gathered together into one place, and let the dry land appear." And it was so. God called the dry land Earth, and the waters that were gathered together he called Seas. And God saw that it was good. And God said, "Let the earth sprout vegetation, plants yielding seed, and fruit trees bearing fruit in which is their seed, each according to its kind, on the earth." And it was so. The earth brought forth vegetation, plants yielding seed according to their own kinds, and trees bearing fruit in which is their seed, each according to its kind. And God saw that it was good. And there was evening and there was morning, the third day.',
        verseZh:      '神說：「天下的水要聚在一處，使旱地露出來。」事就這樣成了。神稱旱地為地，稱水的聚處為海。神看著是好的。神說：「地要發生青草和結種子的菜蔬，並結果子的樹木，各從其類，果子都包著核。」事就這樣成了。於是地發生了青草和結種子的菜蔬，各從其類；並結果子的樹木，各從其類；果子都包著核。神看著是好的。有晚上，有早晨，是第三日。',
        vocab:        ['LAND','SEAS','GROUND'],
        keyOnlyVocab: []
      },
            {
        ref:          'Genesis 1:9–13',
        image:        'Slideshows/Day2/Genesis_1-11-12.jpeg',
        keyEn:        'Then He made plants like grass, grain and trees.',
        keyZh:        '接著，祂創造了各式各樣的植物，像是小草、穀物和樹木。',
        verseEn:      'And God said, "Let the waters under the heavens be gathered together into one place, and let the dry land appear." And it was so. God called the dry land Earth, and the waters that were gathered together he called Seas. And God saw that it was good. And God said, "Let the earth sprout vegetation, plants yielding seed, and fruit trees bearing fruit in which is their seed, each according to its kind, on the earth." And it was so. The earth brought forth vegetation, plants yielding seed according to their own kinds, and trees bearing fruit in which is their seed, each according to its kind. And God saw that it was good. And there was evening and there was morning, the third day.',
        verseZh:      '神說：「天下的水要聚在一處，使旱地露出來。」事就這樣成了。神稱旱地為地，稱水的聚處為海。神看著是好的。神說：「地要發生青草和結種子的菜蔬，並結果子的樹木，各從其類，果子都包著核。」事就這樣成了。於是地發生了青草和結種子的菜蔬，各從其類；並結果子的樹木，各從其類；果子都包著核。神看著是好的。有晚上，有早晨，是第三日。',
        vocab:        ['PLANT','TREE','SEED'],
        keyOnlyVocab: []
      },
            {
        ref:          'Genesis 1:9–13',
        image:        'Slideshows/Day2/Genesis_1-11-12.jpeg',
        keyEn:        'Day Three! Done!',
        keyZh:        '這是第三天！',
        verseEn:      'And God said, "Let the waters under the heavens be gathered together into one place, and let the dry land appear." And it was so. God called the dry land Earth, and the waters that were gathered together he called Seas. And God saw that it was good. And God said, "Let the earth sprout vegetation, plants yielding seed, and fruit trees bearing fruit in which is their seed, each according to its kind, on the earth." And it was so. The earth brought forth vegetation, plants yielding seed according to their own kinds, and trees bearing fruit in which is their seed, each according to its kind. And God saw that it was good. And there was evening and there was morning, the third day.',
        verseZh:      '神說：「天下的水要聚在一處，使旱地露出來。」事就這樣成了。神稱旱地為地，稱水的聚處為海。神看著是好的。神說：「地要發生青草和結種子的菜蔬，並結果子的樹木，各從其類，果子都包著核。」事就這樣成了。於是地發生了青草和結種子的菜蔬，各從其類；並結果子的樹木，各從其類；果子都包著核。神看著是好的。有晚上，有早晨，是第三日。',
        vocab:        ['THREE','THIRD'],
        keyOnlyVocab: []
      },
            {
        ref:          'Genesis 1:14–19',
        image:        'Slideshows/Day2/Genesis_1-13.jpeg',
        keyEn:        'Then God made lights in the sky. He made the sun for the day, the moon for the night, and all the stars.',
        keyZh:        '接著，上帝在天空裡創造了光。祂創造了白天的太陽、夜晚的月亮，還有所有的星星。',
        verseEn:      'And God said, "Let there be lights in the expanse of the heavens to separate the day from the night. And let them be for signs and for seasons, and for days and years, and let them be lights in the expanse of the heavens to give light upon the earth." And it was so. And God made the two great lights — the greater light to rule the day and the lesser light to rule the night — and the stars. And God set them in the expanse of the heavens to give light on the earth, to rule over the day and over the night, and to separate the light from the darkness. And God saw that it was good. And there was evening and there was morning, the fourth day.',
        verseZh:      '神說：「天上要有光體，可以分晝夜，作記號，定節令、日子、年歲；並要發光在天空，普照在地上。」事就這樣成了。於是神造了兩個大光，大的管晝，小的管夜，又造了眾星。就把這些光擺列在天空，普照在地上，管理晝夜，分別明暗。神看著是好的。有晚上，有早晨，是第四日。',
        vocab:        ['SUN','MOON','STAR'],
        keyOnlyVocab: []
      },
            {
        ref:          'Genesis 1:14–19',
        image:        'Slideshows/Day2/Genesis_1-13.jpeg',
        keyEn:        'Day Four! Done!',
        keyZh:        '這是第四天！',
        verseEn:      'And God said, "Let there be lights in the expanse of the heavens to separate the day from the night. And let them be for signs and for seasons, and for days and years, and let them be lights in the expanse of the heavens to give light upon the earth." And it was so. And God made the two great lights — the greater light to rule the day and the lesser light to rule the night — and the stars. And God set them in the expanse of the heavens to give light on the earth, to rule over the day and over the night, and to separate the light from the darkness. And God saw that it was good. And there was evening and there was morning, the fourth day.',
        verseZh:      '神說：「天上要有光體，可以分晝夜，作記號，定節令、日子、年歲；並要發光在天空，普照在地上。」事就這樣成了。於是神造了兩個大光，大的管晝，小的管夜，又造了眾星。就把這些光擺列在天空，普照在地上，管理晝夜，分別明暗。神看著是好的。有晚上，有早晨，是第四日。',
        vocab:        ['FOUR','FOURTH'],
        keyOnlyVocab: []
      }
    ]
  },

  // ─────────────────────────────────────────────
  // LESSON 3 — Creation Day 5
  // ─────────────────────────────────────────────
  {
    titleSlide: {
      image:   'Slideshows/Day3/day3_00_title.jpeg',
      titleEn: 'God Created Animals',
      titleZh: '神創造了動物',
      verseEn: '"God created all kinds of animals." (Genesis 1:21)',
      verseZh: '神造出各樣活物，各從其類。（創世記 1:21）',
      vocab:   ['FISH','BIRD','SWIM','FILL','MULTIPLY','SING','FIVE','FIFTH']
    },
    verseSlides: [
            {
        ref:          'Genesis 1:20–23',
        image:        'Slideshows/Day3/Genesis_1-21.jpeg',
        keyEn:        'God made fish to swim in the water and birds to fly in the sky.',
        keyZh:        '上帝造了水中游魚和空中飛鳥。',
        verseEn:      'And God said, "Let the waters swarm with swarms of living creatures, and let birds fly above the earth across the expanse of the heavens." So God created the great sea creatures and every living creature that moves, with which the waters swarm, according to their kinds, and every winged bird according to its kind. And God saw that it was good. And God blessed them, saying, "Be fruitful and multiply and fill the waters in the seas, and let birds multiply on the earth." And there was evening and there was morning, the fifth day.',
        verseZh:      '神說：「水要多多滋生有生命的物；要有雀鳥飛在地面以上，天空之中。」神就造出大魚和水中所滋生各樣有生命的動物，各從其類；又造出各樣飛鳥，各從其類。神看著是好的。神就賜福給這一切，說：「滋生繁多，充滿海中的水；雀鳥也要多生在地上。」有晚上，有早晨，是第五日。',
        vocab:        ['FISH','BIRD','SWIM'],
        keyOnlyVocab: ['SWIM']
      },
            {
        ref:          'Genesis 1:20–23',
        image:        'Slideshows/Day3/Genesis_1-22-23.jpeg',
        keyEn:        '"Have babies!" He told them. "Fill the world with splashing and singing."',
        keyZh:        '祂對牠們說：「要生養眾多！使這世界充滿水花與鳥鳴。」',
        verseEn:      'And God said, "Let the waters swarm with swarms of living creatures, and let birds fly above the earth across the expanse of the heavens." So God created the great sea creatures and every living creature that moves, with which the waters swarm, according to their kinds, and every winged bird according to its kind. And God saw that it was good. And God blessed them, saying, "Be fruitful and multiply and fill the waters in the seas, and let birds multiply on the earth." And there was evening and there was morning, the fifth day.',
        verseZh:      '神說：「水要多多滋生有生命的物；要有雀鳥飛在地面以上，天空之中。」神就造出大魚和水中所滋生各樣有生命的動物，各從其類；又造出各樣飛鳥，各從其類。神看著是好的。神就賜福給這一切，說：「滋生繁多，充滿海中的水；雀鳥也要多生在地上。」有晚上，有早晨，是第五日。',
        vocab:        ['FILL','MULTIPLY','SING'],
        keyOnlyVocab: ['SING']
      },
            {
        ref:          'Genesis 1:20–23',
        image:        'Slideshows/Day3/Genesis_1-22-23.jpeg',
        keyEn:        'Day Five! Done!',
        keyZh:        '這是第五天！',
        verseEn:      'And God said, "Let the waters swarm with swarms of living creatures, and let birds fly above the earth across the expanse of the heavens." So God created the great sea creatures and every living creature that moves, with which the waters swarm, according to their kinds, and every winged bird according to its kind. And God saw that it was good. And God blessed them, saying, "Be fruitful and multiply and fill the waters in the seas, and let birds multiply on the earth." And there was evening and there was morning, the fifth day.',
        verseZh:      '神說：「水要多多滋生有生命的物；要有雀鳥飛在地面以上，天空之中。」神就造出大魚和水中所滋生各樣有生命的動物，各從其類；又造出各樣飛鳥，各從其類。神看著是好的。神就賜福給這一切，說：「滋生繁多，充滿海中的水；雀鳥也要多生在地上。」有晚上，有早晨，是第五日。',
        vocab:        ['FIVE','FIFTH'],
        keyOnlyVocab: []
      }
    ]
  },

  // ─────────────────────────────────────────────
  // LESSON 4 — Creation Days 6 & 7
  // ─────────────────────────────────────────────
  {
    titleSlide: {
      image:   'Slideshows/Day4/day4_00_title.jpeg',
      titleEn: 'God Created People & the Sabbath',
      titleZh: '神創造了人類和安息日',
      verseEn: '"I am wonderfully made." (Psalm 139:14)',
      verseZh: '我受造奇妙可畏。（詩篇 139:14）',
      vocab:   ['ANIMAL','WILD','CRAWL','IMAGE','MAN','RULE','SIX','SIXTH','GOOD','MADE','EVERYTHING','REST','HOLY','FINISHED','SEVEN','SEVENTH']
    },
    verseSlides: [
            {
        ref:          'Genesis 1:24–31',
        image:        'Slideshows/Day3/Genesis_1-24-25.jpeg',
        keyEn:        'Next, God made animals. He made farm animals, wild animals, and animals that crawl on the ground.',
        keyZh:        '接下來，上帝創造了動物。祂創造了家畜、野生動物，以及在地上爬行的動物。',
        verseEn:      'And God said, "Let the earth bring forth living creatures according to their kinds — livestock and creeping things and beasts of the earth according to their kinds." And it was so. And God made the beasts of the earth according to their kinds and the livestock according to their kinds, and everything that creeps on the ground according to its kind. And God saw that it was good. Then God said, "Let us make man in our image, after our likeness. And let them have dominion over the fish of the sea and over the birds of the heavens and over the livestock and over all the earth and over every creeping thing that creeps on the earth." So God created man in his own image, in the image of God he created him; male and female he created them. And God blessed them. And God said to them, "Be fruitful and multiply and fill the earth and subdue it, and have dominion over the fish of the sea and over the birds of the heavens and over every living thing that moves on the earth." And God said, "Behold, I have given you every plant yielding seed that is on the face of all the earth, and every tree with seed in its fruit. You shall have them for food. And to every beast of the earth and to every bird of the heavens and to everything that creeps on the earth, everything that has the breath of life, I have given every green plant for food." And it was so. And God saw everything that he had made, and behold, it was very good. And there was evening and there was morning, the sixth day.',
        verseZh:      '神說：「地要生出活物來，各從其類；牲畜、昆蟲、野獸，各從其類。」事就這樣成了。於是神造出野獸，各從其類；牲畜，各從其類；地上一切昆蟲，各從其類。神看著是好的。神說：「我們要照著我們的形像、按著我們的樣式造人，使他們管理海裡的魚、空中的鳥、地上的牲畜，和全地，並地上所爬的一切昆蟲。」神就照著自己的形像造人，乃是照著他的形像造男造女。神就賜福給他們，又對他們說：「要生養眾多，遍滿地面，治理這地；也要管理海裡的魚、空中的鳥，和地上各樣行動的活物。」神說：「看哪，我將遍地上一切結種子的菜蔬和一切樹上所結有核的果子全賜給你們作食物。至於地上的走獸和空中的飛鳥，並各樣爬在地上有生命的物，我將青草賜給他們作食物。」事就這樣成了。神看著一切所造的都甚好。有晚上，有早晨，是第六日。',
        vocab:        ['ANIMAL','WILD','CRAWL'],
        keyOnlyVocab: []
      },
            {
        ref:          'Genesis 1:24–31',
        image:        'Slideshows/Day4/Genesis_1-28.jpeg',
        keyEn:        'So, in His image, God made man and woman. "Have babies," He said. "Take charge of the world." Care for the fish, the birds and the animals.',
        keyZh:        '於是，上帝照著自己的模樣創造了男人和女人。祂說：「生養後代吧！去治理這個世界。」並要好好照顧魚兒、鳥類和所有的動物。',
        verseEn:      'And God said, "Let the earth bring forth living creatures according to their kinds — livestock and creeping things and beasts of the earth according to their kinds." And it was so. And God made the beasts of the earth according to their kinds and the livestock according to their kinds, and everything that creeps on the ground according to its kind. And God saw that it was good. Then God said, "Let us make man in our image, after our likeness. And let them have dominion over the fish of the sea and over the birds of the heavens and over the livestock and over all the earth and over every creeping thing that creeps on the earth." So God created man in his own image, in the image of God he created him; male and female he created them. And God blessed them. And God said to them, "Be fruitful and multiply and fill the earth and subdue it, and have dominion over the fish of the sea and over the birds of the heavens and over every living thing that moves on the earth." And God said, "Behold, I have given you every plant yielding seed that is on the face of all the earth, and every tree with seed in its fruit. You shall have them for food. And to every beast of the earth and to every bird of the heavens and to everything that creeps on the earth, everything that has the breath of life, I have given every green plant for food." And it was so. And God saw everything that he had made, and behold, it was very good. And there was evening and there was morning, the sixth day.',
        verseZh:      '神說：「地要生出活物來，各從其類；牲畜、昆蟲、野獸，各從其類。」事就這樣成了。於是神造出野獸，各從其類；牲畜，各從其類；地上一切昆蟲，各從其類。神看著是好的。神說：「我們要照著我們的形像、按著我們的樣式造人，使他們管理海裡的魚、空中的鳥、地上的牲畜，和全地，並地上所爬的一切昆蟲。」神就照著自己的形像造人，乃是照著他的形像造男造女。神就賜福給他們，又對他們說：「要生養眾多，遍滿地面，治理這地；也要管理海裡的魚、空中的鳥，和地上各樣行動的活物。」神說：「看哪，我將遍地上一切結種子的菜蔬和一切樹上所結有核的果子全賜給你們作食物。至於地上的走獸和空中的飛鳥，並各樣爬在地上有生命的物，我將青草賜給他們作食物。」事就這樣成了。神看著一切所造的都甚好。有晚上，有早晨，是第六日。',
        vocab:        ['IMAGE','MAN','RULE'],
        keyOnlyVocab: []
      },
            {
        ref:          'Genesis 1:24–31',
        image:        'Slideshows/Day4/Genesis_1-28.jpeg',
        keyEn:        'Day Six! Done!',
        keyZh:        '這是第六天！',
        verseEn:      'And God said, "Let the earth bring forth living creatures according to their kinds — livestock and creeping things and beasts of the earth according to their kinds." And it was so. And God made the beasts of the earth according to their kinds and the livestock according to their kinds, and everything that creeps on the ground according to its kind. And God saw that it was good. Then God said, "Let us make man in our image, after our likeness. And let them have dominion over the fish of the sea and over the birds of the heavens and over the livestock and over all the earth and over every creeping thing that creeps on the earth." So God created man in his own image, in the image of God he created him; male and female he created them. And God blessed them. And God said to them, "Be fruitful and multiply and fill the earth and subdue it, and have dominion over the fish of the sea and over the birds of the heavens and over every living thing that moves on the earth." And God said, "Behold, I have given you every plant yielding seed that is on the face of all the earth, and every tree with seed in its fruit. You shall have them for food. And to every beast of the earth and to every bird of the heavens and to everything that creeps on the earth, everything that has the breath of life, I have given every green plant for food." And it was so. And God saw everything that he had made, and behold, it was very good. And there was evening and there was morning, the sixth day.',
        verseZh:      '神說：「地要生出活物來，各從其類；牲畜、昆蟲、野獸，各從其類。」事就這樣成了。於是神造出野獸，各從其類；牲畜，各從其類；地上一切昆蟲，各從其類。神看著是好的。神說：「我們要照著我們的形像、按著我們的樣式造人，使他們管理海裡的魚、空中的鳥、地上的牲畜，和全地，並地上所爬的一切昆蟲。」神就照著自己的形像造人，乃是照著他的形像造男造女。神就賜福給他們，又對他們說：「要生養眾多，遍滿地面，治理這地；也要管理海裡的魚、空中的鳥，和地上各樣行動的活物。」神說：「看哪，我將遍地上一切結種子的菜蔬和一切樹上所結有核的果子全賜給你們作食物。至於地上的走獸和空中的飛鳥，並各樣爬在地上有生命的物，我將青草賜給他們作食物。」事就這樣成了。神看著一切所造的都甚好。有晚上，有早晨，是第六日。',
        vocab:        ['SIX','SIXTH'],
        keyOnlyVocab: []
      },
            {
        ref:          'Genesis 2:1–4',
        image:        'Slideshows/Day4/Genesis_2-1-2.jpeg',
        keyEn:        'Then God looked at everything He had made. "It\'s very good." He said.',
        keyZh:        '隨後，上帝看著祂所創造的一切，上帝說：「這一切都非常好。」',
        verseEn:      'Thus the heavens and the earth were finished, and all the host of them. And on the seventh day God finished his work that he had done, and he rested on the seventh day from all his work that he had done. So God blessed the seventh day and made it holy, because on it God rested from all his work that he had done in creation. These are the generations of the heavens and the earth when they were created, in the day that the Lord God made the earth and the heavens.',
        verseZh:      '天地萬物都造齊了。到第七日，神造物的工已經完畢，就在第七日歇了他一切的工，安息了。神賜福給第七日，定為聖日；因為在這日，神歇了他一切創造的工，就安息了。創造天地的來歷，在耶和華神造天地的日子，乃是這樣。',
        vocab:        ['GOOD','MADE','EVERYTHING'],
        keyOnlyVocab: []
      },
            {
        ref:          'Genesis 2:1–4',
        image:        'Slideshows/Day4/Genesis_2-3.jpeg',
        keyEn:        'So on the seventh day He rested and made that day special.',
        keyZh:        '於是在第七天，祂歇下工作休息了，並讓這一天變得非常特別。',
        verseEn:      'Thus the heavens and the earth were finished, and all the host of them. And on the seventh day God finished his work that he had done, and he rested on the seventh day from all his work that he had done. So God blessed the seventh day and made it holy, because on it God rested from all his work that he had done in creation. These are the generations of the heavens and the earth when they were created, in the day that the Lord God made the earth and the heavens.',
        verseZh:      '天地萬物都造齊了。到第七日，神造物的工已經完畢，就在第七日歇了他一切的工，安息了。神賜福給第七日，定為聖日；因為在這日，神歇了他一切創造的工，就安息了。創造天地的來歷，在耶和華神造天地的日子，乃是這樣。',
        vocab:        ['REST','HOLY','FINISHED'],
        keyOnlyVocab: []
      },
            {
        ref:          'Genesis 2:1–4',
        image:        'Slideshows/Day4/Genesis_2-3.jpeg',
        keyEn:        'Day Seven! Done!',
        keyZh:        '這是第七天！',
        verseEn:      'Thus the heavens and the earth were finished, and all the host of them. And on the seventh day God finished his work that he had done, and he rested on the seventh day from all his work that he had done. So God blessed the seventh day and made it holy, because on it God rested from all his work that he had done in creation. These are the generations of the heavens and the earth when they were created, in the day that the Lord God made the earth and the heavens.',
        verseZh:      '天地萬物都造齊了。到第七日，神造物的工已經完畢，就在第七日歇了他一切的工，安息了。神賜福給第七日，定為聖日；因為在這日，神歇了他一切創造的工，就安息了。創造天地的來歷，在耶和華神造天地的日子，乃是這樣。',
        vocab:        ['SEVEN','SEVENTH'],
        keyOnlyVocab: []
      }
    ]
  }
];
