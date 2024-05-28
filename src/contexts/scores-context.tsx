import { ReactNode, createContext, useContext, useReducer } from "react";

export type Score = {
  questionNumber: number;
  score: number;
};

export type ScoresState = {
  scores: Score[];
  email: string;
};

type ScoresContextValue = ScoresState & {
  setEmail: (email: string) => void;
  addScore: (score: Score) => void;
  deleteScore: (questionNumber: number) => void;
};

const ScoresContext = createContext<ScoresContextValue | null>(null);

type Action =
  | { type: "SET_EMAIL"; payload: string }
  | { type: "ADD_SCORE"; payload: Score }
  | { type: "DELETE_SCORE"; payload: number };

function scoresReducer(state: ScoresState, action: Action) {
  switch (action.type) {
    case "SET_EMAIL":
      return { ...state, email: action.payload };

    case "ADD_SCORE":
      return {
        ...state,
        scores: [
          ...state.scores,
          {
            questionNumber: action.payload?.questionNumber,
            score: action.payload?.score,
          },
        ],
      };

    case "DELETE_SCORE":
      return {
        ...state,
        scores: state.scores.filter(
          (score) => score.questionNumber !== action.payload,
        ),
      };

    default:
      return state;
  }
}

type ScoresContextProviderProps = {
  children: ReactNode;
};

const initialState: ScoresState = {
  scores: [],
  email: "",
};

function ScoresContextProvider({ children }: ScoresContextProviderProps) {
  const [scoresState, dispatch] = useReducer(scoresReducer, initialState);

  const ctx: ScoresContextValue = {
    scores: scoresState.scores,
    email: scoresState.email,
    setEmail(emailData) {
      dispatch({ type: "SET_EMAIL", payload: emailData });
    },
    addScore(scoreData) {
      dispatch({ type: "ADD_SCORE", payload: scoreData });
    },
    deleteScore(deleteNumber) {
      dispatch({ type: "DELETE_SCORE", payload: deleteNumber });
    },
  };

  return (
    <ScoresContext.Provider value={ctx}>{children}</ScoresContext.Provider>
  );
}

export function useScoresContext() {
  const scoresCts = useContext(ScoresContext);
  if (scoresCts === null) {
    throw new Error("ScoresContext is null");
  }

  return scoresCts;
}

export default ScoresContextProvider;
