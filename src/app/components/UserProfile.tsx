"use client";
import { fetchUser } from "../store/userSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

export function UserProfile() {
  const dispatch = useAppDispatch();
  const { loading, name } = useAppSelector(state => state.user);

  return (
    <div>
      <button onClick={() => dispatch(fetchUser())}>
        Load Profile
      </button>

      {loading && <p>Loading...</p>}
      {name && <h1>{name}</h1>}
    </div>
  );
}
