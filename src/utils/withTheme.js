import React, { PureComponent } from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { ThemeConsumer } from '../theme';

// This function takes a component...
const withTheme = (WrappedComponent) => {
  // ...and returns another component...
  class ThemedComponent extends PureComponent {
    render() {
      return (
        <ThemeConsumer>
          {({ theme, updateTheme }) => <WrappedComponent {...this.props} theme={theme} updateTheme={updateTheme} />}
        </ThemeConsumer>
      );
    }
  }

  hoistNonReactStatics(ThemedComponent, WrappedComponent);

  return ThemedComponent;
};

export default withTheme;
