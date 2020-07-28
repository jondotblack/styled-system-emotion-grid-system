import React from 'react';
import { render, screen, rendererWithTheme } from 'testing/utils';

import '@testing-library/jest-dom/extend-expect';

import { Col, Container, Row } from '../index';

describe('Grid', () => {
  it('should render a container correctly with all props', () => {
    const tree = rendererWithTheme(<Container fluid>container content</Container>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render a row correctly', () => {
    const tree = rendererWithTheme(<Row>row content</Row>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render width styles correctly with span prop', () => {
    const tree = rendererWithTheme(
      <Col span={{ md: 2, lg: 3, xl: 4 }}>column content</Col>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render offset styles correctly with prop', () => {
    const tree = rendererWithTheme(<Col offset={{ md: 1, lg: 3 }}>column content</Col>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render order styles correctly with prop', () => {
    const tree = rendererWithTheme(<Col order={{ md: 1, lg: 2 }}>column content</Col>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('children elements are correctly rendering', () => {
    render(
      <Container>
        <Row>
          <Col>placeholder text</Col>
        </Row>
      </Container>,
    );

    const children = screen.getByText('placeholder text');

    expect(children).toBeInTheDocument();
  });
});
