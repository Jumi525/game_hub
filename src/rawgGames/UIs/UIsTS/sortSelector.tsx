import { Button, Select } from "@chakra-ui/react";

interface Props {
  onSort: (order: string) => void;
}

const sorted = [
  { value: "", label: "Relevance" },
  { value: "-metacritic", label: "Popularity" },
  { value: "-added", label: "Date added" },
  { value: "name", label: "Name" },
  { value: "-released", label: "Released date" },
  { value: "-rating", label: "Average rating" },
];

const SortSelector = ({ onSort }: Props) => {
  return (
    <Select
      onChange={(event) => onSort(event.target.value)}
      placeholder="Order by: Relevance"
      width="fit-content"
    >
      {sorted.map((sorts) => (
        <option key={sorts.value} value={sorts.value}>
          {" "}
          {sorts.label}
        </option>
      ))}
    </Select>
  );
};
export default SortSelector;
