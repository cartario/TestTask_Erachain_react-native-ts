import {createSlice} from '@reduxjs/toolkit';
import {getQuotes} from '../../api';
import {adapter} from '../../utils';

export interface ListState {
  items: null;
  loading: boolean;
  error: string | null;
}

const initialState: ListState = {
  items: null,
  loading: false,
  error: null,
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
    setError: (state, {payload}) => {
      state.error = payload;
    },
  },
});

export const {setItems, setLoading, setError} = listSlice.actions;

export const fetchItemsAsync = () => async (dispatch, getState) => {
  dispatch(setLoading(true));
  try {
    dispatch(setItems(adapter(await getQuotes())));
    dispatch(setError(null));
  } catch (e) {
    console.log(e.message);
    dispatch(setError(e.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const updateItemsAsync = () => async (dispatch, getState) => {
  try {
    dispatch(setItems(adapter(await getQuotes())));
    dispatch(setError(null));
  } catch (e) {
    console.log(e.message);
    dispatch(setError(e.message));
  }
};

export const selectItems = state => state.list.items;
export const selectLoading = state => state.list.loading;
export const selectError = state => state.list.error;

export default listSlice.reducer;
