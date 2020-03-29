import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PlaceHolderMsg = styled.div`
  width: 200px;
  height: 300px;
  background: #bbbbbb;
  color: #222222;
  opacity: 0.85;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: none;
  padding: 8px;
`;

const PlaceHolderBorder = styled.div`
  border-color: #bbbbbb;
  border-radius: 2px;
  border-width: 2px;
  border-style: dashed;
  padding: 10px;
  justify-content: center;
  align-items: center;
  display: inline-block;
`;

const childrenNotFound = 'Children Not Found';
const childrenFound = 'Children Found';

const withPlaceHolder = WrappedComponent => {
  // BH extending FLOAT
  class PlaceHolder extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        hasError: false,
        error: null,
        info: null,
      };
    }

    componentDidCatch(error, info) {
      if (error.toString().includes(childrenFound)) {
        this.setState({ hasError: false, error: null, info: null });
      } else {
        this.setState({ hasError: true, error, info });
      }
    }

    render() {
      const retVal = (
        <WrappedComponent {...this.props} hasError={this.state.hasError} error={this.state.error} />
      );
      return retVal;
    }
  }

  PlaceHolder.propTypes = {
    children: PropTypes.element,
  };

  return PlaceHolder;
};

class PHBC extends React.Component {
  render() {
    return <PlaceHolderBorder {...this.props}>{this.props.children}</PlaceHolderBorder>;
  }
}

PHBC.propTypes = {
  children: PropTypes.element,
};

const withBoundaryHandler = WrappedComponent => {
  // FLOAT
  class BoundaryHandler extends WrappedComponent {
    // BH extends FLOAT
    render() {
      const elementsTree = super.render(); //RENDERED FLOAT
      if (!this.props.hasError && this.props.children === undefined) {
        // oh snap! no children
        throw new Error(childrenNotFound); //PASS 1 - no children - throws error
      } else if (this.props.hasError && this.props.children !== undefined) {
        // found children - clear the error
        throw new Error(childrenFound);
      }
      /* continues if:
         hasError && noChildren => toDisplay-Error;
         !hasError && children => toDisplay-Component;
      */
      const PHB = withBoundaryHandler(PHBC); // doesn't like styled component so wrapped in a class
      // eslint-disable-next-line no-nested-ternary
      const msg = this.props.hasError ? (
        this.props.error.toString().includes(childrenNotFound) ? (
          <Fragment>
            Warning: {childrenNotFound}
            <br />
            <br />
            Component is expected to contain children, displaying place holder instead.
          </Fragment>
        ) : (
          this.props.error.toString()
        )
      ) : (
        ''
      );
      const toDisplay = this.props.hasError ? (
        <PHB>
          <PlaceHolderMsg>{msg}</PlaceHolderMsg>
        </PHB>
      ) : (
        elementsTree.props.children
      );
      const newElementsTree = React.cloneElement(elementsTree, elementsTree.props, toDisplay);
      return newElementsTree;
    }
  }
  return withPlaceHolder(BoundaryHandler);
};

export default withBoundaryHandler;
