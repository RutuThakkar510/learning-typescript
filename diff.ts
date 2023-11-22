// type UserProps = {
//   name: string;
//   age: number;
// };

// interface UserProps {
//   name: string;
//   age: number;
// }

// export default function User(item: UserProps) {
//   return item;
// }

// type UserProps = {
//   name: string;
//   age: number;
// };

// extending
// type AdminProps = UserProps & {
//   role: string;
//   // role: 'admin' | 'user'
// };

// const user: AdminProps = {
//   name: "admin",
//   age: 30,
//   role: "admin",
// };

// interface UserProps {
//   name: string;
//   age: number;
// }

// interface AdminProps extends UserProps {
//   role: string;
// }

// interface can only describe object
// types alias can describe object and everything else

// type Address = string;
// interface Address {
//   address: string;
// }

// const address: Address = { address: "address here" };
// const address: Address = "address here";

// types alias can be used with union types
// type Address = string | string[];
// const address: Address = ["address", "address here"];

// type alias can use utility types
type UserProps = {
  name: string;
  age: number;
  createdAt: Date;
};

// type GuestProps = Omit<UserProps, "name" | "age">;
interface GuestProps extends Omit<UserProps, "name"> {}

// type can easily describe tuples
// type Tup = [number, string];
interface Tup extends Array<number | string> {
  0: number;
  1: string;
}

let myTuple: Tup = [1, "str"];
let myTuple2: Tup = [2, "str2"];

// extracting types from something
const project = {
  name: "Project 1",
  description: "Description of Project 1",
  specs: {
    frontend: "React",
    backend: "node",
  },
} as const;

type Specifications = typeof project.specs;

// interface can be merged types can not be merged

interface Car {
  name: string;
}
interface Car {
  brand: string;
}

const myCar: Car = {
  name: "Car 1",
  brand: "Brand 1",
};
