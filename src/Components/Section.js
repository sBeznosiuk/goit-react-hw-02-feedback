import PropTypes from 'prop-types';
import React from 'react';

const Section = ({ title, children }) => (
  <section>
    <h2>{title}</h2>
    {children}
  </section>
);

Section.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
};

export default Section;
