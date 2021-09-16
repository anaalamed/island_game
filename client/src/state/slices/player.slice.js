import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPlayer = createAsyncThunk(
	'players/me',
	async (payload) => {
    console.log(payload);
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
      console.log(me);
      return (me);
		}
	}
);

export const addPlayer = createAsyncThunk(
	'players/addNew',
	async (payload) => {
    console.log(payload);
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
      console.log(player);
		}
	}
);

export const updateStatus = createAsyncThunk(
	'players/updateStatus',
	async (payload) => {
    console.log(payload);
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
      console.log(player);
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
    }
  }
});

export default player_slice.reducer;

