export default function AwesomeAnimals() {
  return (
    <ul>
      {["Chicken", "Sloth", "Porcupine", "Killer whale", "Velociraptor"].map(
        (animal, index) => {
          return (
            <li key={index}>
              Awesomeness level {index + 1}: {animal}
            </li>
          );
        }
      )}
    </ul>
  );
}
