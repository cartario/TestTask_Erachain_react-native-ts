import axios from 'axios';

export const getQuotes = async () => {
  return (await axios.get('https://poloniex.com/public?command=returnTicker')).data
};