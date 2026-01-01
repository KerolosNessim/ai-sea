import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Search } from "lucide-react";
import { Button } from "../ui/button";
const TeamSecrch = ({placeholder}: {placeholder: string}) => {
  return (
    <div className="flex items-center gap-2">
      <InputGroup className=" h-12  rounded-full bg-background ">
        <InputGroupInput
          placeholder={placeholder}
          
        />
        <InputGroupAddon>
          <Search className=" size-5" />
        </InputGroupAddon>
      </InputGroup>
      <Button className="size-12 bg-secondary text-white rounded-full">
        <Search/>
      </Button>
    </div>
  );
};

export default TeamSecrch;
