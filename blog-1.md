## The significance of union and intersection types in Typescript.

### Overview

Union and Intersection types in Typescript are ways to create more flexible & powerful types for handselling complex data structures & improving type safety in our code.

### Union types

Unions types allow variable to hold one of several types make it flexible in situation where a function or variable needs to handle multiple types of input.
If we have a function that accepts a parameter that can be string or number , we can use a union type like (string | number) to handle types without error

#### Syntax:

```typescript
type UnionType = TypeA | TypeB;
```

#### Use Cases:

When a function should accept multiple types, union types can help us define this clearly.

```typescript
function format(input: string | number): void {
  console.log("User Input: ${input}");
}
```

### Intersection types

Intersection types combine multiple types into one. Meaning the result type will have all the properties of every type combined. This is helpful specially in large project where objects need to meet multiple criteria. This keeps code clear and organized with type safety

#### Use Cases: :

If you have two types, Person with a name and age property, and Employee with an employeeId and department, you can combine them into a single type that includes all properties from both Person and Employee.

```typescript
type Person = {
  name: string;
  age: number;
};

type Employee = {
  employeeId: number;
  department: string;
};

// Using intersection type to combine both Person and Employee
type EmployeeProfile = Person & Employee;

const employee: EmployeeProfile = {
  name: "Alice",
  age: 30,
  employeeId: 12345,
  department: "Engineering",
};

console.log(employee);
```

### Summary

Union and Intersection type enhanced type safety and flexibility, making Typescript strong choice for developing robust and maintainable applications
