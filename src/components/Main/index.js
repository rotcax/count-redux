import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from './styles';
import * as actions from '../../store/actions';

class Main extends Component {
  incrementCount() {
    const { count, action } = this.props;
    
    const number = count.number;
    action.incrementCount(number);
  }

  decrementCount() {
    const { count, action } = this.props;
    
    const number = count.number;
    action.decrementCount(number);
  }

  render() {
    const { count } = this.props;

    return (
      <View style={styles.container}>
        <Button
          title="Increment"
          onPress={() => this.incrementCount()}
        />
          <Text>{ count.number }</Text>
        <Button
          title="Decrement"
          onPress={() => this.decrementCount()}
        />
      </View>
    );
  }
}

function mapStateProps(state) {
  return {
    ...state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateProps, mapDispatchToProps)(Main);