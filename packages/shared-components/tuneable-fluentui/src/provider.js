import React from 'react';
import PropTypes from 'prop-types';
import { Provider, themes } from '@fluentui/react-northstar';

export default class TuneableProvider extends React.Component {
  componentDidUpdate(prevProps) {
    if (prevProps.theme !== this.props.theme && this.props.onChange) {
      this.props.onChange(undefined, { value: this.props.theme });
    }
  }

  render() {
    const { theme, ...rest } = this.props;
    return (
      <Provider theme={themes[theme]} {...rest}>
        {this.props.children}
      </Provider>
    );
  }
}

TuneableProvider.propTypes = {
  theme: PropTypes.string,
  onChange: PropTypes.func,
  children: PropTypes.element,
};
