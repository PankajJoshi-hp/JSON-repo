let morePersons = {
  persons: [
    {
      name: "Virat",
      lastname: "Kohli",
      DOB: "5/10/1992",
    },
  ],
};

let fetchPersons =
  morePersons.persons[0].name + " " + morePersons.persons[0].lastname;
document.writeln("More Persons are " + fetchPersons);
