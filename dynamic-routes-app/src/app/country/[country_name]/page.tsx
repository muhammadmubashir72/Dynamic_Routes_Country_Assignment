"use client";

type Country = {
  name: string;
  population: string;
  capital: string;
};

const CountriesData: Record<string, Country> = {
  usa: { name: 'USA', population: '331 million', capital: 'Washington, D.C.' },
  canada: { name: 'Canada', population: '38 million', capital: 'Ottawa' },
  germany: { name: 'Germany', population: '83 million', capital: 'Berlin' },
  japan: { name: 'Japan', population: '126 million', capital: 'Tokyo' },
  australia: { name: 'Australia', population: '25 million', capital: 'Canberra' },
};

type CountryDetailsProps = {
  params: {
    country_name: string;
  };
};

// Component to display country details
const CountryDetails = ({ params }: CountryDetailsProps) => {
  const { country_name } = params; // Destructure the country_name from params
  const country = CountriesData[country_name.toLowerCase()];

  if (!country) {
    return <div>Country not found.</div>;
  }

  return (
    <div>
      <h1>{country.name}</h1>
      <p><strong>Population:</strong> {country.population}</p>
      <p><strong>Capital:</strong> {country.capital}</p>
    </div>
  );
};

export default CountryDetails;
