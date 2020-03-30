import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const PlaceHolderMsg = styled.div`
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

export const PlaceHolderBorder = styled.div`
  border-color: #bbbbbb;
  border-radius: 2px;
  border-width: 2px;
  border-style: dashed;
  padding: 10px;
  justify-content: center;
  align-items: center;
  display: inline-block;
`;

export const childrenNotFound = 'Children Not Found';
export const childrenFound = 'Children Found';

const withPlaceHolder = WrappedComponent => {
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
      } else if (error.toString().includes(childrenNotFound)) {
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

const withBoundaryHandler = WrappedComponent => {
  class BoundaryHandler extends WrappedComponent {
    render() {
      const elementsTree = super.render();
      if (!this.props.hasError && this.props.children === undefined) {
        // oh snap! no children
        throw new Error(childrenNotFound);
      } else if (this.props.hasError && this.props.children !== undefined) {
        // found children - clear the error
        throw new Error(childrenFound);
      }
      /* continues if:
         hasError && noChildren => toDisplay-Error;
         !hasError && children => toDisplay-Component;
      */
      const toDisplay = this.props.hasError ? <>{this.props.placeHolder}</> : elementsTree.props.children;
      const newElementsTree = React.cloneElement(elementsTree, elementsTree.props, toDisplay);
      return newElementsTree;
    }
  }
  return withPlaceHolder(BoundaryHandler);
};

export default withBoundaryHandler;
