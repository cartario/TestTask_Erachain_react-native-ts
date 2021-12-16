import ListView from './View';
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {getQuotes} from '../../api';
import {adapter} from '../../utils';
import lang from '../../lang/ru.json';

class List extends Component {
  state = {
    data: null,
  };

  componentDidMount() {
    getQuotes().then(response => this.setState({data: adapter(response)})); //todo dispatch to redux
  }

  renderLoader() {
    return (
      <View>
        <Text>{lang.loading}</Text>
      </View>
    );
  }

  render(): React.ReactNode {
    const {data} = this.state; //todo move to redux

    return <>{data ? <ListView data={data} /> : this.renderLoader()}</>;
  }
}

export default List;
