import { Input } from "./Filter.styled";
import { Label } from "./Filter.styled";
import { FilterBox } from "./Filter.styled";

export function Filter({value, onChange}) {
    return <FilterBox>
        
        <Input type="text" value={value} onChange={onChange} placeholder=' ' />
        <Label >
            Find
        </Label> 
    </FilterBox>
}