import React from 'react';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

export default {
  title: 'atoms/Paragraph',
  component: Paragraph,
};

export const NormalText = () => <Paragraph>Some text</Paragraph>;
export const BoldText = () => <Paragraph bold>Some text</Paragraph>;
export const LightText = () => <Paragraph light>Some text</Paragraph>;
