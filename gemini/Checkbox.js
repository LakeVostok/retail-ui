/* global gemini */

var pathTo = require('./utils').pathTo;

gemini.suite('Checkbox plain', suite => {
  suite
    .setUrl(pathTo('Checkbox', 'plain'))
    .setCaptureElements('#test-element')
    .capture('plain')
    .capture('hovered', (actions, find) => {
      actions.mouseMove(find('span'));
    })
    .capture('pressed', (actions, find) => {
      actions.mouseDown(find('span'));
    })
    .capture('unpressed', (actions, find) => {
      actions.mouseUp(find('span'));
    });
});

gemini.suite('Checkbox disabled', suite => {
  suite
    .setUrl(pathTo('Checkbox', 'disabled'))
    .setCaptureElements('#test-element')
    .capture('Checkbox disabled');
});

gemini.suite('Checkbox disabled checked', suite => {
  suite
    .setUrl(pathTo('Checkbox', 'disabled checked'))
    .setCaptureElements('#test-element')
    .capture('Checkbox disabled checked');
});

gemini.suite('Checkbox error', suite => {
  suite
    .setUrl(pathTo('Checkbox', 'error'))
    .setCaptureElements('#test-element')
    .capture('Checkbox error');
});

gemini.suite('Checkbox with a long label', suite => {
  suite
    .setUrl(pathTo('Checkbox', 'with a long label'))
    .setCaptureElements('#test-element')
    .capture('plain');
});
