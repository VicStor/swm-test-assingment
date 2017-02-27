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
const stylesTable = {
  'jc:c': 'justify-content: center',
  'jc:s': 'justify-content: start',
  'jc:e': 'justify-content: end',
  'jc:b': 'justify-content: space-between',
  'ai:c': 'align-items: ',
  'ac:c': 'align-content: ',
  'as:c': 'align-self: ',
  fa: 'flex: auto',
  fn: 'flex: none',
  rn: 'row nowrap',
  rrn: 'row-reverse nowrap',
  rw: 'row wrap',
  rwr: 'row wrap-reverse',
  rrw: 'row-reverse wrap',
  rrwr: 'row-reverse wrap-reverse',
  cn: 'column nowrap',
  crn: 'column-reverse nowrap',
  cw: 'column wrap',
  cwr: 'column wrap-reverse',
  crw: 'column-reverse wrap',
  crwr: 'column-reverse wrap-reverse',
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

// const ChatHeader = flexComponent(SectionHeader, 'jc:c ai:с f:a')
// const fDiv = flexComponent('div', 'rn jc:c ai:c');

export const flexComponent = (component, style) => (
  compose(flexItem, flexContainer)(component)
);
