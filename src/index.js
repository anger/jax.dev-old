const projectitems = [
  {
    name: "Voyager.js",
    href: "https://github.com/anger/voyager-js",
    description: "a Node.js script designed for testing URLs for template injection vulnerabilities. It automates the process of appending known injection strings to URLs and monitors the responses for signs of successful injection.",
    featured: false,
  },
  {
    name: "fontpocalypse",
    href: "https://github.com/anger/fontpocalypse",
    description: "a powerful tool for typography-based cyber security vulnerabilities. Generates custom fonts, CSS files, and HTML to visualize and explore security risks.    ",
    featured: false,
  },
  {
    name: "Targeted Password Generator",
    href: "https://github.com/anger/targeted-password-generator",
    description:
      "a password generation tool that automates the creation of a 15k+ wordlist based on various inputted information, which can be used in penetration testing/forensic investigations to crack passwords.",
    featured: false,
  },
  {
    name: "Angel Fetch",
    href: "https://github.com/anger/angelfetch",
    description:
      "a simple angel themed command line fetch script made in bash.",
    featured: false,
  },
  

];

let projects = document.getElementById("projects");

for (let project of projectitems) {
  let itemp = document.createElement("p");
  itemp.innerHTML = `➜ <a target="_blank" rel="noopener noreferrer" href='${project.href}'>${project.name}</a> - ${project.description}`;
  projects.appendChild(itemp);
}
