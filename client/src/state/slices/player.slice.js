import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPlayer = createAsyncThunk(
	'players/me',
	async (payload) => {
    console.log(payload);
		const response = await fetch('http://localhost:7000/api/users/me', {
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
		const response = await fetch('http://localhost:7000/api/users/player', {
      method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
      body: JSON.stringify({ email: payload.email, name: payload.name }),
		});
    if (response.ok) {
      const player = await response.json();
      console.log(player);
      // return {me};
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

