import { User } from "../models/user.model";

class UserDto {
  email;
  id;
  isActivated;

  constructor(model: User | null) {
    this.email = model?.email;
    this.id = model?._id;
    this.isActivated = model?.isActivated;
  }
}

export default UserDto;
