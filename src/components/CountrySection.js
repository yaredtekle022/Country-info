import React from 'react';
import PropTypes from 'prop-types';
import PoliticalDivisions from './CountryInfo';

function CountrySection({ geonameId }) {
  return (
    <div>
      <PoliticalDivisions geonameId={geonameId} />
    </div>
  );
}

CountrySection.propTypes = {
  geonameId: PropTypes.string.isRequired,
};

export default CountrySection;
