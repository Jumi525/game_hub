import { Select } from "@chakra-ui/react";
import DataServices from "../../../httpServices";
import useEntity from "../BKUI/useEntities";
import { Platforms } from "../BKUI/entitys";
import usePlatform from "../BKUI/usePlatforms";

interface Props {
  onplatform: (platforms: number, name?: string) => void;
}

const Platform = ({ onplatform }: Props) => {
  const { result } = usePlatform();
  return (
    <Select
      onChange={(event) =>
        onplatform(
          parseInt(event.target.selectedOptions[0].value),
          event.target.selectedOptions[0].id
        )
      }
      placeholder="Platforms"
      width="fit-content"
    >
      {result.map((platform) => (
        <option key={platform.slug} id={platform.name} value={platform.id}>
          {platform.name}
        </option>
      ))}
    </Select>
  );
};

export default Platform;
