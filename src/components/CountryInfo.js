import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

function PoliticalDivisions({ geonameId }) {
  const [provinceData, setProvinceData] = useState([]);

  useEffect(() => {
    const urlProvinces = `http://api.geonames.org/childrenJSON?geonameId=${geonameId}&username=yaredtekle22`;

    axios.get(urlProvinces)
      .then((response) => {
        if (response.data.geonames && response.data.geonames.length > 0) {
          setProvinceData(response.data.geonames);
        }
      })
      .catch((error) => {
        console.error('Error fetching province data:', error);
      });
  }, [geonameId]);

  return (
    <div>
      <h2>Country Info</h2>
      {provinceData.length > 0 ? (
        <ul>
          {provinceData.map((province) => (
            <li key={province.geonameId}>
              Name of the Province:
              {' '}
              {province.toponymName}
              <br />
              Local population:
              {' '}
              {province.population}
            </li>
          ))}
        </ul>
      ) : (
        <p>No province data available.</p>
      )}
    </div>
  );
}

PoliticalDivisions.propTypes = {
  geonameId: PropTypes.string.isRequired,
};

export default PoliticalDivisions;
