import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';
import { host } from 'storybook-host';
import Alert from './index.jsx';

storiesOf('Alert', module)
  .addDecorator(host({
    align: 'center middle',
    width: '60%',
  }))
  .add('Alert success', () => (
    <Alert type="success" content="I'm the content" />
  ))
  .add('Alert error', () => (
    <Alert type="error" content="I'm the content" />
  ))
  .add('Alert no content', () => (
    <Alert type="error" content="" />
  ));