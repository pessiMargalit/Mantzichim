import { ObjectId } from "mongoose"

export class UserDTO {

    name: String
    email: String
    masechtot_name: [String]
    slain_id: ObjectId
    kadish: Boolean
    
}