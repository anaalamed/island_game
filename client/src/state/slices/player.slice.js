import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPlayer = createAsyncThunk(
	'players/me',
	async (payload) => {
    const response = await fetch('https://anaalamed-island-game.herokuapp.com/api/users/me', {
		// const response = await fetch('http://localhost:7000/api/users/me', {
			headers: {
				'Content-Type': 'application/json',
        'email': payload
			},
      // body: JSON.stringify({ email: payload }),
		});
    if (response.ok) {
      const me = await response.json();
      return (me);
		}
	}
);

export const addPlayer = createAsyncThunk(
	'players/addNew',
	async (payload) => {
    const response = await fetch('https://anaalamed-island-game.herokuapp.com/api/users/player', {
		// const response = await fetch('http://localhost:7000/api/users/player', {
      method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
      body: JSON.stringify({ email: payload.email, name: payload.name }),
		});
    if (response.ok) {
      const player = await response.json();
		}
	}
);

export const updateStatus = createAsyncThunk(
	'players/updateStatus',
	async (payload) => {
    const response = await fetch('https://anaalamed-island-game.herokuapp.com/api/users/updateStatus', {
		// const response = await fetch('http://localhost:7000/api/users/updateStatus', {
      method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
        'email': payload.email
			},
      body: JSON.stringify({ isGameOver: payload.isGameOver }),
		});
    if (response.ok) {
      const player = await response.json();
      return player;
		}
	}
);

const player_slice = createSlice({
  name: "player",
  initialState: {
    me: {}
  },
  reducers: {},
  extraReducers: {
    // --------------- other Async -----------------------
    [getPlayer.fulfilled]: (state, action) => {
      state.me = action.payload;
    },
    [updateStatus.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.me.wins = action.payload.wins;
      state.me.losings = action.payload.losings;
    }
  }
});

export default player_slice.reducer;

