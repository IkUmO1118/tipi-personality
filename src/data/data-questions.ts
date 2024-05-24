export type QuestionProps = {
  questionNumber: number;
  questionText: string;
};

export type QuestionsProps = QuestionProps[];

export const questionsData: QuestionsProps = [
  {
    questionNumber: 0,
    questionText: "私は自分の事を活発で、外向的だと思う",
  },
  {
    questionNumber: 1,
    questionText: "私は自分の事を批判的で、もめごとを起こしやすいと思う",
  },
  {
    questionNumber: 2,
    questionText: "私は自分の事をしっかりしていて、自分に厳しいと思う",
  },
  {
    questionNumber: 3,
    questionText: "私は自分の事を心配性で、うろたえやすいと思う",
  },
  {
    questionNumber: 4,
    questionText: "私は自分の事を新しいことが好きで、変わった考えを持つと思う",
  },
  {
    questionNumber: 5,
    questionText: "私は自分の事を無口で、静かだと思う",
  },
  {
    questionNumber: 6,
    questionText: "私は自分の事を同情しやすく、やさしい人間だと思う",
  },
  {
    questionNumber: 7,
    questionText: "私は自分の事をだらしなく、うっかりしていると思う",
  },
  {
    questionNumber: 8,
    questionText: "私は自分の事を冷静で、気分が安定していると思う",
  },
  {
    questionNumber: 9,
    questionText: "私は自分の事を独創的ではなく、平凡な人間だと思う",
  },
];
