import { MyContext } from './MyContext';

// interface MyNameProps {
//   name: string;
//   id?: string;
//   password?: string;
// }

// export function MyName({ name, id = 'id123', password }: MyNameProps) {
//   return (
//     <>
//       <div className="text-3xl font-bold underline">My Name: {name}</div>
//       <div>ID: {id}</div>
//       {password && <div>Password: {password}</div>}
//     </>
//   );
// }

export function MyName() {
  return (
    <MyContext.Consumer>
      {({ name }) => <div className="text-3xl font-bold underline">My Name: {name}</div>}
    </MyContext.Consumer>
  );
}
