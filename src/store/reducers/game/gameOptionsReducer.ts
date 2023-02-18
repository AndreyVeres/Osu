/* eslint-disable default-param-last */

enum gameOptionsActions {
  SET_GAME_RESOLUTION = 'SET_GAME_RESOLUTION',
  SET_GAME_DIFFICULTY = 'SET_GAME_DIFFICULTY',
  SET_GAME_MODE = 'SET_GAME_MODE'
}

interface setResolutionAction {
  type: gameOptionsActions.SET_GAME_RESOLUTION;
  payload: { CX: number; CY: number };
}

interface setDifficultyAction {
  type: gameOptionsActions.SET_GAME_DIFFICULTY;
  payload: {
    approachTime: number;
    circleSize: number;
  };
}

interface setGameModeAction {
  type: gameOptionsActions.SET_GAME_MODE;
  payload: boolean;
}

export interface IGameOptions {
  КСoefficient: { CX: number; CY: number };
  difficulty: {
    approachTime: number;
    circleSize: number;
  };
  isHard: boolean;
}

const gameOptions: IGameOptions = {
  КСoefficient: {
    CX: 0,
    CY: 0,
  },
  difficulty: {
    approachTime: 0,
    circleSize: 0,
  },
  isHard: false,
};

type GameAction = setResolutionAction | setDifficultyAction | setGameModeAction;

const gameOptionsReducer = (
  state: IGameOptions = gameOptions,
  action: GameAction
): IGameOptions => {
  switch (action.type) {
    case gameOptionsActions.SET_GAME_RESOLUTION:
      return { ...state, КСoefficient: action.payload };

    case gameOptionsActions.SET_GAME_DIFFICULTY:
      return {
        ...state,
        difficulty: action.payload,
      };
    case gameOptionsActions.SET_GAME_MODE:
      return {
        ...state,
        isHard: action.payload,
      };

    default:
      return state;
  }
};

export const setGameResolution = (payload: { CX: number; CY: number }) => (
  { type: gameOptionsActions.SET_GAME_RESOLUTION, payload }
);

export const setGameMode = (payload: boolean) => (
  { type: gameOptionsActions.SET_GAME_MODE, payload }
);

export const setGameDiffuculty = (
  payload: {
    approachTime: number;
    circleSize: number;
  }
) => (
  { type: gameOptionsActions.SET_GAME_DIFFICULTY, payload }
);

export default gameOptionsReducer;
