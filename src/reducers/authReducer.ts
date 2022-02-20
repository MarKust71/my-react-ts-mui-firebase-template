export type UserState = {
  uid: string | null;
  email: string | null;
};

export const userInitialState: UserState = {
  uid: null,
  email: null,
};

export const userStateInit = () => {
  return userInitialState;
};

export enum UserActionKind {
  SET_USER = 'SET_USER',
}

export type UserAction = {
  type: UserActionKind;
  payload: UserState;
};

export const authReducer = (state: UserState, action: UserAction) => {
  switch (action.type) {
    case UserActionKind.SET_USER:
      return {
        ...state,
        uid: action.payload.uid,
        email: action.payload.email,
      };

    default:
      throw new Error();
  }
};
