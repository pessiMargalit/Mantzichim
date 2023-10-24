import { Slain } from "src/schemas/slain.schema";
import { UserDTO } from "./user.dto";

export class UserAndSlain
{
    user: UserDTO
    slain: Slain
}