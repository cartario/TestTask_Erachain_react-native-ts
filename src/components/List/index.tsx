import {connect} from 'react-redux';
import ListView from './View';
import React, {Component} from 'react';
import {ActivityIndicator} from 'react-native';
import {fetchItemsAsync} from './listSlice';

class List extends Component {
  componentDidMount() {
    const {fetchItemsAsync} = this.props;
    fetchItemsAsync();
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
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
