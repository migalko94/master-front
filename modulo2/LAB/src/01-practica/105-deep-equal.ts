console.log("*****105 deep equal*****");
var user = { name: "María", age: 30 };
var clonedUser = { name: "María", age: 30 };

function isEqual<T extends object>(a: T, b: T): boolean {
  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }

  for (const value in a) {
    if (!b.hasOwnProperty(value) || a[value] !== b[value]) {
      return false;
    }
  }
  return true;
}

console.log("***Apartado A***");

console.log("Apartado A: ", isEqual(user, clonedUser)); // true

console.log("***Apartado B***");

var user2 = {
  name: "María",
  age: 30,
  address: { city: "Málaga", code: 29620 },
  friends: ["Juan"],
};
var clonedUser2 = {
  name: "María",
  age: 30,
  address: { city: "Málaga", code: 29620 },
  friends: ["Juan"],
};

function isDeepEqual<T>(a: T, b: T): boolean {
  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }

  for (const value in a) {
    if (!b.hasOwnProperty(value)) {
      return false;
    }

    const hasEquality =
      typeof a[value] === "object" && typeof b[value] === "object"
        ? isDeepEqual(a[value], b[value])
        : a[value] === b[value];

    if (!hasEquality) {
      return false;
    }
  }
  return true;
}
console.log("Apartado B: ", isDeepEqual(user, clonedUser)); // true
