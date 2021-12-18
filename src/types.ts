export interface CellProps {
  bold?: boolean, 
  text?: string, 
  isLast?: boolean,  
};

export interface AdaptedFetchedItemProps {
  name?: string, 
  last?: string, 
  highestBid?: string, 
  percentChange?: string, 
};

export interface ListViewProps { 
  data: null | Array<AdaptedFetchedItemProps>
};
