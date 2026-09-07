interface IProps {
  heroes: iHeroData[];
}

export default function HeroesList({ heroes }: IProps) {
  return (
    <>
      <h1>Personagens</h1>
      {heroes.map((hero) => (
        <p key={hero.id}>{hero.name}</p>
      ))}
    </>
  );
}
