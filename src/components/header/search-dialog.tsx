import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Button } from "../ui/button";
import { Search } from "lucide-react";

type Props = {
  title: string;
  placeholder: string;
};

const SearchDialog = ({ title, placeholder }: Props) => {
  return (
    <Dialog >
      <DialogTrigger asChild>
        <Button className="bg-gris size-10 rounded-full ">
          <Search />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle >{title}</DialogTitle>
          <DialogDescription  asChild>
            <InputGroup >
              <InputGroupInput placeholder={placeholder} />
              <InputGroupAddon>
                <Search />
              </InputGroupAddon>
            </InputGroup>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
