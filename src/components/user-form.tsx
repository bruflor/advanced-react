import { includeUpdatableResouce } from "./include-updatable-resouce.js";

interface IUserInfoForm {
    user?: { name?: string; age?: number };
    onChangeUser: (user: { name?: string; age?: number }) => void;
    onSaveUser: () => void;
    onResetUser: () => void;
}

export const UserInfoForm = includeUpdatableResouce(
  ({ user, onChangeUser, onSaveUser, onResetUser }:IUserInfoForm) => {
    const { name, age } = user || {};

    return user ? (
      <>
        <label>
          Name:
          <input
            value={name}
            onChange={(e    ) => onChangeUser({...user, name: e.target.value })}
          />
        </label>
        <label>
          Age:
          <input
            value={age}
            onChange={(e) => onChangeUser({...user, age: Number(e.target.value) })}
          />
        </label>
        <button onClick={onResetUser}>Reset</button>
        <button onClick={onSaveUser}>Save</button>
      </>
    ) : (
      <h3>Loading...</h3>
    );
  },
  "/users/2",
  "user"
);
