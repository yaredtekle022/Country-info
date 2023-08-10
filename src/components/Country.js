import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import getFlagImageUrl from './Flags';

function Country({
  geonameId,
  countryCode,
  countryName,
  currencyCode,
  areaInSqKm,
  continentName,
  population,
  index,
}) {
  const differentStyle = index % 4 === 1 || index % 4 === 2;
  const style = differentStyle ? 'bg-blue-3' : 'bg-blue-4';

  const flagImageUrl = getFlagImageUrl(countryCode);

  return (
    <NavLink className={`country-card ${style}`} to={`country/${geonameId}`}>
      <div className="country-info">
        <img className="country-image" src={flagImageUrl} alt={countryName} />
        <p className="country-name">{countryName}</p>
        <p className="currency-code">{currencyCode}</p>
      </div>
      <div className="country-details">
        <p className="area">
          Area:
          {areaInSqKm}
          {' '}
          km²
        </p>
        <p className="continent">
          Continent:
          {continentName}
        </p>
        <p className="population">
          Population:
          {population}
        </p>
      </div>
    </NavLink>
  );
}

Country.propTypes = {
  countryCode: PropTypes.string,
  countryName: PropTypes.string.isRequired,
  currencyCode: PropTypes.string.isRequired,
  areaInSqKm: PropTypes.string.isRequired,
  continentName: PropTypes.string.isRequired,
  population: PropTypes.string,
  index: PropTypes.number.isRequired,
  geonameId: PropTypes.number.isRequired,
};

Country.defaultProps = {
  countryCode: 0,
  population: 'not specificed',
};

export { Country, getFlagImageUrl };
