import styled from 'styled-components';
import { compose } from 'redux';

const FLOW_PROPS = ['rn', 'rrn', 'rw', 'rwr', 'rrw', 'rrwr', 'cn', 'crn', 'cw', 'cwr', 'crw', 'crwr'];

const flowProp = (props) => {
  const flow = FLOW_PROPS.reduce((f, fp) => {
    if (fp in props) {
      return fp;
    }
    return f;
  }, null);
  return flow ? `flex-flow: ${makeFlow(flow)};` : '';
};


const makeFlow = (flow) => {
  switch (flow) {
    case 'rn': return 'row nowrap';
    case 'rrn': return 'row-reverse nowrap';
    case 'rw': return 'row wrap';
    case 'rwr': return 'row wrap-reverse';
    case 'rrw': return 'row-reverse wrap';
    case 'rrwr': return 'row-reverse wrap-reverse';
    case 'cn': return 'column nowrap';
    case 'crn': return 'column-reverse nowrap';
    case 'cw': return 'column wrap';
    case 'cwr': return 'column wrap-reverse';
    case 'crw': return 'column-reverse wrap';
    case 'crwr': return 'column-reverse wrap-reverse';
    default: return '';
  }
};
const makeJustify = (justify) => {
  switch (justify) {
    case 'start': return 'flex-start';
    case 'end': return 'flex-end';
    case 'between': return 'space-between';
    case 'around': return 'space-around';
    case 'center': return 'center';
    case 'stretch': return 'stretch';
    case 'base': return 'baseline';
    default: return '';
  }
};

export const flexContainer = (component) => (
  styled(component)`
    display: flex;
    ${flowProp}
    ${({ flow }) => flow ? `flex-flow: ${makeFlow(flow)};` : ''}
    ${({ jc }) => jc ? `justify-content: ${makeJustify(jc)};` : ''}
    ${({ ai }) => ai ? `align-items: ${makeJustify(ai)};` : ''}
    ${({ ac }) => ac ? `align-content: ${makeJustify(ac)};` : ''}
  `
);

export const flexItem = (component) => (
  styled(component)`
    ${({ order }) => order ? `order: ${order};` : ''}
    ${({ grow }) => grow ? `flex-grow: ${grow};` : ''}
    ${({ shrink }) => shrink ? `flex-shrink: ${shrink};` : ''}
    ${({ basis }) => basis ? `flex-basis: ${basis};` : ''}
    ${({ flex }) => flex ? `flex: ${flex};` : ''}
    ${({ as }) => as ? `align-self: ${makeJustify(as)};` : ''}
  `
);

export const flexComponent = (component) => (
  compose(flexItem, flexContainer)(component)
);
