import React, {Component} from 'react';
import {View, StatusBar, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import AppActions from '../redux/app-reducer';
//import NavigatorService from '../Services/Navigator';
//import ReduxPersist from '../Config/ReduxPersist';
import {ApplicationStyles, Colors} from '../styles';

class RootContainer extends Component {
    constructor(props) {
        super(props);
        this.navigator = React.createRef();
    }

    async componentDidMount() {
        //NavigatorService.setContainer(this.navigator);
        //if (!ReduxPersist.active) {
        //    console.log('Redux persist not active');
        //    this.props.startup();
        //}
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.container}>
                    <Text>Redux variable: {this.props.splashScreenShown ? "false" : "true"}</Text>
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        splashScreenShown: state.app.splashScreenShown,
    };
};

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);

const styles = StyleSheet.create({
    ...ApplicationStyles,
});
