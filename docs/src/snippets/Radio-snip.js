ReactDOM.render(
  <Gapped gap={20}>
    <Radio />
    <Radio disabled />
    <Radio disabled checked />
    <Radio checked />
    <Radio focused />
    <Radio focused checked />
    <Radio error />
    <Radio warning />
  </Gapped>,
  mountNode
);
