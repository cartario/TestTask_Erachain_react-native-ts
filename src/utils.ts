export const adapter = (data: any) => {
  const keys = Object.keys(data);

  const res = keys.map(key => {
    return ({
      name: key,
      last: data[key].last,
      highestBid: data[key].highestBid,
      percentChange: data[key].percentChange,
    })
  });

  return res;
};
