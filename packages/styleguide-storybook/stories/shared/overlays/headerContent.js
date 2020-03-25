import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Text } from '@jsdevtools/tuneable-fluentui';
import { ThemeSelector } from './themeSelector';

export const HeaderContent = props => (
  <Flex space="between" vAlign="center">
    <div>
      <Text style={{}} size="large" weight="bold" content={`${props.content}`} />
      {props.subContent ? (
        <>
          <br />
          <Text size="small" content={props.subContent} />
        </>
      ) : null}
    </div>
    <ThemeSelector />
  </Flex>
);

HeaderContent.propTypes = {
  content: PropTypes.string,
  subContent: PropTypes.string,
};
