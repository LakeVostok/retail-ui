// @flow
import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs, select, text } from '@kadira/storybook-addon-knobs';

import Hint from '../Hint';
import HintBox from '../HintBox';
import Gapped from '../../Gapped';

class HintBoxComponent extends React.Component {
  props: {
    text: string,
    pos?: 'top' | 'right' | 'bottom' | 'left',
    children?: any
  };

  static defaultProps = {
    pos: 'top'
  };

  state: {
    dom: ?HTMLElement
  } = {
    dom: null
  };

  _ref = (el: ?HTMLElement) => {
    this.setState({ dom: el });
  };

  _getDOM = () => {
    return this.state.dom;
  };

  render() {
    return (
      <span ref={this._ref}>
        {this.props.children}
        <HintBox
          getTarget={this._getDOM}
          text={this.props.text}
          pos={this.props.pos}
          maxWidth={200}
        />
      </span>
    );
  }
}

const getKnobs = () => ({
  text: text('text', 'Hello!'),
  pos: select('position', ['top', 'right', 'bottom', 'left'], 'top'),
  maxWidth: text('max-width', '200')
});

storiesOf('Hint', module)
  .addDecorator(story => (
    <div style={{ padding: '100px 300px' }}>
      {story()}
    </div>
  ))
  .addDecorator(withKnobs)
  .add('playground', () => <Hint {...getKnobs()}>Plain hint with knobs</Hint>)
  .add('too much hints', () => (
    <Gapped gap={5}>
      {[...Array(252)].map((el, i) => (
        <Hint text="test" key={i}>Hover me!</Hint>
      ))}
    </Gapped>
  ))
  .add('default', () => (
    <HintBoxComponent text="Something will never be changed">
      <span className="hint-content">
        Ich Liebe dich
      </span>
    </HintBoxComponent>
  ))
  .add('left', () => (
    <HintBoxComponent pos="left" text="Something will never be changed">
      <span className="hint-content">
        Je t'aime
      </span>
    </HintBoxComponent>
  ))
  .add('right', () => (
    <HintBoxComponent pos="right" text="Something will never be changed">
      <span className="hint-content">
        Ti voglio bene
      </span>
    </HintBoxComponent>
  ))
  .add('bottom', () => (
    <HintBoxComponent pos="bottom" text="Something will never be changed">
      <span className="hint-content">
        Te amo
      </span>
    </HintBoxComponent>
  ));
