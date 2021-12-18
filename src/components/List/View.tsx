import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import {ListViewProps, AdaptedFetchedItemProps} from '../../types';
import {styles} from './style';
import {selectItems, selectError} from './listSlice';
import Cell from '../Cell';
import lang from '../../lang/ru.json';

const Row = ({rowData}: {rowData: AdaptedFetchedItemProps}) => {
  const {name, last, highestBid, percentChange} = rowData;

  return (
    <View style={{...styles.row, ...styles.rowNoBorder}}>
      {[name, last, highestBid, percentChange].map((each, i, arr) => (
        <Cell key={each + i} text={each} isLast={i === arr.length - 1} />
      ))}
    </View>
  );
};

const List = () => {
  const data: ListViewProps = useSelector(selectItems);
  const error: string | null = useSelector(selectError);

  const renderMessage = () => {
    return (
      <View style={styles.message}>
        <Text style={styles.messageText}>
          {lang.error}: {error}
        </Text>
      </View>
    );
  };

  const renderHeader = () => {
    return (
      <View style={styles.row}>
        {lang.headerNames.map((each, i, arr) => (
          <Cell key={each} text={each} isLast={i === arr.length - 1} bold />
        ))}
      </View>
    );
  };

  const renderTable = () => {
    return (
      <ScrollView>
        {data?.map(quote => (
          <Row rowData={quote} key={quote.name} />
        ))}
      </ScrollView>
    );
  };

  return (
    <View style={styles.container}>
      {error && renderMessage()}
      {renderHeader()}
      {renderTable()}
    </View>
  );
};

export default List;
