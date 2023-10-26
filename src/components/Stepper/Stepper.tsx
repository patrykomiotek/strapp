import React, { useReducer } from "react";
import { Button, Text } from "../../ui";

const initialState = {
  count: 0,
};

enum ActionType {
  INCREMENT = "increment",
  DECREMENT = "decrement",
}

type State = typeof initialState;
type Action = {
  type: ActionType;
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionType.INCREMENT:
      return { count: state.count + 1 };
    case ActionType.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export const Stepper = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <Button onClick={() => dispatch({ type: ActionType.DECREMENT })}>
        -
      </Button>
      <Text>{state.count}</Text>
      <Button onClick={() => dispatch({ type: ActionType.INCREMENT })}>
        +
      </Button>
    </div>
  );
};
