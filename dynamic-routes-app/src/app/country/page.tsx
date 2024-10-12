import Link from "next/link";

const CountryList = () => {
  const countries = ["USA", "Canada", "UK", "Australia", "France"];
  
  return (
    <div>
      <h1>Country List</h1>
      <ul>
        {countries.map((country) => (
          <li key={country}>
            {/* Fixed Link syntax with backticks */}
            <Link href={`/country/${country.toLowerCase()}`}>{country}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
