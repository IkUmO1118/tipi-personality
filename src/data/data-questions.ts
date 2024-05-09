type Question = {
  questionNumber: number;
  questionText: string;
  choices: string[];
};

type Questions = Question[];

export const questionsData: Questions = [
  {
    questionNumber: 1,
    questionText: "私は自分の事を活発で、外向的だと思う",
    choices: ["1", "2", "3", "4", "5", "6", "7"],
  },
  {
    questionNumber: 2,
    questionText: "私は自分の事を批判的で、もめごとを起こしやすいと思う",
    choices: ["1", "2", "3", "4", "5", "6", "7"],
  },
  {
    questionNumber: 3,
    questionText: "私は自分の事をしっかりしていて、自分に厳しいと思う",
    choices: ["1", "2", "3", "4", "5", "6", "7"],
  },
  {
    questionNumber: 4,
    questionText: "私は自分の事を心配性で、うろたえやすいと思う",
    choices: ["1", "2", "3", "4", "5", "6", "7"],
  },
  {
    questionNumber: 5,
    questionText: "私は自分の事を新しいことが好きで、変わった考えを持つと思う",
    choices: ["1", "2", "3", "4", "5", "6", "7"],
  },
  {
    questionNumber: 6,
    questionText: "私は自分の事を無口で、静かだと思う",
    choices: ["1", "2", "3", "4", "5", "6", "7"],
  },
  {
    questionNumber: 7,
    questionText: "私は自分の事を同情しやすく、やさしい人間だと思う",
    choices: ["1", "2", "3", "4", "5", "6", "7"],
  },
  {
    questionNumber: 8,
    questionText: "私は自分の事をだらしなく、うっかりしていると思う",
    choices: ["1", "2", "3", "4", "5", "6", "7"],
  },
  {
    questionNumber: 9,
    questionText: "私は自分の事を冷静で、気分が安定していると思う",
    choices: ["1", "2", "3", "4", "5", "6", "7"],
  },
  {
    questionNumber: 10,
    questionText: "私は自分の事を独創的ではなく、平凡な人間だと思う",
    choices: ["1", "2", "3", "4", "5", "6", "7"],
  },
];
