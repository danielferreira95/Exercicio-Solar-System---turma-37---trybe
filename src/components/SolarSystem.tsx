import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

function SolarSystem() {
  return (
    <div data-testid="solar-system">
      <Title headline="Planetas" />
      {planets.map((planeta) => {
        return (<PlanetCard
          key={ planeta.name }
          planetName={ planeta.name }
          planetImage={ planeta.image }
        />);
      })}
    </div>
  );
}

export default SolarSystem;
