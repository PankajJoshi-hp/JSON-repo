const jsonData = {
  students: [
    { firstname: "John", lastname: "Doe", dob: "1990-05-15" },
    { firstname: "Jane", lastname: "Smith", dob: "1992-08-25" },
  ],
  teachers: [
    { firstname: "Alice", lastname: "Brown", dob: "1985-02-12" },
    { firstname: "Bob", lastname: "Johnson", dob: "1988-11-19" },
  ],
};

Object.keys(jsonData).forEach((category) => {
  const heading = document.createElement("h2");
  heading.textContent = category.charAt(0).toUpperCase() + category.slice(1);
  document.body.appendChild(heading);

  const table = document.createElement("table");
  table.style.borderCollapse = "collapse";
  table.style.width = "50%";
  table.style.margin = "20px auto";

  const headerRow = document.createElement("tr");
  const headers = ["First Name", "Last Name", "Date of Birth"];
  headers.forEach((headerText) => {
    const th = document.createElement("th");
    th.textContent = headerText;
    th.style.border = "1px solid #ccc";
    th.style.padding = "8px";
    th.style.backgroundColor = "#f4f4f4";
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);

  jsonData[category].forEach((person) => {
    const row = document.createElement("tr");
    Object.values(person).forEach((value) => {
      const td = document.createElement("td");
      td.textContent = value;
      td.style.border = "1px solid #ccc";
      td.style.padding = "8px";
      td.style.textAlign = "left";
      row.appendChild(td);
    });
    table.appendChild(row);
  });
  document.body.appendChild(table);
});
