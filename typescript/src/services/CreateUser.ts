/**
 * P/ criar: name, email, password
 */

interface TechObject {
  title: String;
  experience: Number;
}

// Interface => is used to define an object's data set typing.
interface CreateUserData {
  name?: string;
  email: string;
  password: string;
  techs: Array<string | TechObject>; // If is a simple type we can use 'string[]'.
}

export default function createUser({ name, email, password } : CreateUserData) {
  const user = {
    name, 
    email,
    password
  }

  return user;
}