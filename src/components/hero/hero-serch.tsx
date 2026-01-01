import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput
} from "@/components/ui/input-group";
import { Mic, WandSparkles } from "lucide-react";
type Props = {
  search: string;
}
const HeroSerch = ({search}: Props) => {
  return (
    <InputGroup className=" h-12 bg-gris rounded-full border-white border">
      <InputGroupInput placeholder={search} className="placeholder:text-white text-white ms-4" />
      <InputGroupAddon>
        <WandSparkles  className="text-white size-5" />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
          <Mic size={20} className="text-white size-5" />
      </InputGroupAddon>
    </InputGroup>
  );
}

export default HeroSerch