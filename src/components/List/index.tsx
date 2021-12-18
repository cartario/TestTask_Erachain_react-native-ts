import {connect} from 'react-redux';
import ListView from './View';
import React, {Component} from 'react';
import {ActivityIndicator} from 'react-native';
import {fetchItemsAsync, updateItemsAsync} from './listSlice';

class List extends Component {
  componentDidMount() {
    const {fetchItemsAsync, updateItemsAsync} = this.props;
    fetchItemsAsync();

    this.timerID = setInterval(() => {
      updateItemsAsync();
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render(): React.ReactNode {
    const {loading} = this.props;

    if (loading) {
      return <ActivityIndicator size="large" />;
    }

    return <ListView />;
  }
}

function mapStateToProps(state) {
  return {
    items: state.list.items,
    loading: state.list.loading,
  };
}

const mapDispatchToProps = {
  fetchItemsAsync,
  updateItemsAsync,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
