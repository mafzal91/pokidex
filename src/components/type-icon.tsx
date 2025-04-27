const IMAGE_URL =
  "https://raw.githubusercontent.com/partywhale/pokemon-type-icons/refs/heads/main/icons";

export function TypeIcon({ type }: { type: string }) {
  const url = `${IMAGE_URL}/${type}.svg`;
  return <img src={url} alt={type} height={20} width={20} />;
}
