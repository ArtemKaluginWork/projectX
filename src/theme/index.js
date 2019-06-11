import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { theme as actions } from 'actions';

const Context = React.createContext();

class ThemeContextProvider extends Component {
  state = {
    theme: this.props.theme,
    updateTheme: (theme) => {
      this.setState({ theme });
      this.props.updateTheme(theme);
    }
  };

  render() {
    const { children } = this.props;
    return (
      <Context.Provider value={this.state}>
        {children}
      </Context.Provider>
    );
  }
}

const mapStateToProps = ({ theme = {} }) => ({
  theme: theme.theme,
  colors: theme.currentColorsSet,
});

const mapDispatchToProps = dispatch => bindActionCreators({ updateTheme: actions.updateTheme }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ThemeContextProvider);

export const ThemeConsumer = Context.Consumer;
export const ThemeContext = Context;
