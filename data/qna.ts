export const qna = [
  {
    id: 1,
    question: "What was the main goal of the study by Jentzsch and Kersting?",
    choices: [
      "To determine whether ChatGPT's humor output aligns with established computational humor theories in linguistics and psychology.",
      "To investigate ChatGPT's capacity to generate, explain, and detect jokes as a means of assessing its grasp of human humor mechanisms.",
      "To evaluate how reinforcement learning with human feedback (RLHF) influences ChatGPT's creativity and humor diversity.",
      "To compare ChatGPT's humor comprehension performance with that of open-source language models like GPT-NeoX and LLaMA.",
    ],
  },
  {
    id: 2,
    question:
      "After removing direct duplicates from the total number of jokes collected in the study, what percentage of joke samples is left for Jentzsch and Kersting before further refining the list?",
    choices: ["90%", "50%", "10%", "30%"],
  },
  {
    id: 3,
    question:
      "What methodology did the authors primarily use to analyze ChatGPT's humor abilities?",
    choices: [
      "By letting human participants interact with ChatGPT and rate how natural its jokes felt in conversation",
      "By using prepared prompts in new chats to test how ChatGPT makes and understand jokes",
      "By training a smaller language model to imitate ChatGPT's style of humor and comparing results",
      "By reviewing transcripts of ChatGPT's public conversations to find patterns in its jokes",
    ],
  },
  {
    id: 4,
    question:
      "ChatGPT gave a fabricated explanation for which invalid joke (one that was mentioned by the paper), showing its tendency to produce fictional reasoning?",
    choices: [
      "“Why did the chicken cross the road? To get to the other side.”",
      "“Why did the cookie go to the gym? To get a-cookie-dized.”",
      "“Why did the man put his money in the blender? He wanted to make time fly.”",
      "“Why was the physics book sad? Because it had so many formulas to memorize.”",
    ],
  },
  {
    id: 5,
    question:
      "What were the three main characteristics of jokes identified in ChatGPT's outputs?",
    choices: [
      "Structure, Topic, and Wordplay",
      "Context, Length, and Sentiment",
      "Joke, Potentially Funny, No Joke",
      "Context, Humor Type, and Emotion",
    ],
  },
  {
    id: 6,
    question:
      "What does ChatGPT's tendency to generate “fictional but convincing explanations” for unfunny jokes suggest?",
    choices: [
      "It has a bias toward overtrusting the user when they imply a statement is a joke, even when it isn't.",
      "It creates believable explanations even when it doesn't really understand them.",
      "It prioritizes sounding confident over accurately assessing the humor in a statement.",
      "It tries to maintain the flow of conversation by explaining a joke, even when no real explanation exists.",
    ],
  },
  {
    id: 7,
    question:
      "Jentzsch and Kersting's observation that ChatGPT's jokes followed a “recognizable pattern” most strongly supports which view about the model's humor generation?",
    choices: [
      "The use of familiar joke templates shows that humor understanding can emerge spontaneously from previously learned data.",
      "The repetition of joke patterns proves that ChatGPT's algorithm applies reinforcement feedback on audience reactions.",
      "The pattern of joke generation demonstrates the model's consistent semantic mapping between punchlines and premises.",
      "The humor arises from imitation of linguistic templates rather than from conceptual abstraction.",
    ],
  },
  {
    id: 8,
    question:
      "Which of the following statements is/are true?\n\nStatement 1: ChatGPT demonstrated improved humor classification when more joke characteristics were present in the sentence.\n\nStatement 2: With the presence of only a single joke-characteristic, the model was easily misled into classifying non-joke statements as jokes.",
    choices: [
      "Statement 1 is true.",
      "Statement 2 is true.",
      "Both statements are true.",
      "None are true.",
    ],
  },
  {
    id: 9,
    question:
      "According to the discussion, ChatGPT's limitations in humor primarily arise because:",
    choices: [
      "The dataset used to train ChatGPT was too small, leaving it without enough exposure to linguistic humor.",
      "ChatGPT's design makes it interpret jokes too literally and analytically, making it struggle with their playful or illogical nature.",
      "Humor inherently requires social and contextual understanding beyond pattern learning.",
      "ChatGPT's architecture prevents it from producing original jokes, as it merely repeats jokes word for word from its training data.",
    ],
  },
  {
    id: 10,
    question:
      "If another model produced fewer repeated jokes but many incoherent punchlines, what conclusion would align with the reasoning of Jentzsch and Kersting's paper?",
    choices: [
      "The model likely memorized fewer jokes, showing stronger originality and humor understanding.",
      "The model may generate more from scratch, indicating less memorization but also weaker understanding of humor structure.",
      "The model exhibits human-like humor variation and creativity.",
      "The model achieved better performance because its outputs were less repetitive.",
    ],
  },
];
