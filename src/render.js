import React from 'react';
import {render as renderReactDOM} from 'react-dom';
import Book from './Book';

export default function render(element) {
  renderReactDOM(<Book />, element);
}
