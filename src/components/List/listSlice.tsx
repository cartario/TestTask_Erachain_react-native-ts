import {createSlice} from '@reduxjs/toolkit';
import {getQuotes} from '../../api';
import {adapter} from '../../utils';

export interface ListState {
  items: null;
  loading: boolean;
}

const initialState: ListState = {
  items: null,
  loading: false,
};

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    setItems: (state, {payload}) => {
      state.items = payload;
    },
    setLoading: (state, {payload}) => {
      state.loading = payload;
    },
  },
});

export const {setItems, setLoading} = listSlice.actions;

export const fetchItemsAsync = () => async (dispatch, getState) => {
  dispatch(setLoading(true));
  try {
    dispatch(setItems(adapter(await getQuotes())));
  } catch (e) {
    console.log(e.message);
  } finally {
    dispatch(setLoading(false));
  }
};

export const selectItems = state => state.list.items;
export const selectLoading = state => state.list.loading;

export default listSlice.reducer;
