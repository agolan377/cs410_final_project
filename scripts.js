window.onload = createNavBarAndFooter();

function createNavBarAndFooter() {
  //create nav bar
  let div = document.createElement("div");
  div.setAttribute(
    "class",
    "navbar-collapse justify-content-center text-center"
  );
  let ul = document.createElement("ul");
  ul.setAttribute("class", "navbar-nav");

  div.appendChild(ul);

  let li1 = document.createElement("li");
  li1.setAttribute("class", "nav-item");
  let a1 = document.createElement("a");
  a1.setAttribute("class", "nav-link text-color-white");
  a1.setAttribute("href", "./index.html");
  let projects = document.createTextNode("Projects");
  a1.appendChild(projects);
  li1.appendChild(a1);
  ul.appendChild(li1);

  let li2 = document.createElement("li");
  li2.setAttribute("class", "nav-item");
  let a2 = document.createElement("a");
  a2.setAttribute("class", "nav-link");
  a2.setAttribute("href", "./previousWork.html");
  let previousWork = document.createTextNode("Previous Work");
  a2.appendChild(previousWork);
  li2.appendChild(a2);
  ul.appendChild(li2);

  let li3 = document.createElement("li");
  li3.setAttribute("class", "nav-item");
  let a3 = document.createElement("a");
  a3.setAttribute("class", "nav-link");
  a3.setAttribute("href", "./about.html");
  let about = document.createTextNode("About");
  a3.appendChild(about);
  li3.appendChild(a3);
  ul.appendChild(li3);

  let li4 = document.createElement("li");
  li4.setAttribute("class", "nav-item");
  let a4 = document.createElement("a");
  a4.setAttribute("class", "nav-link");
  a4.setAttribute("href", "./contact.html");
  let constact = document.createTextNode("Contact");
  a4.appendChild(constact);
  li4.appendChild(a4);
  ul.appendChild(li4);

  let navContainer = document.getElementById("nav");
  navContainer.setAttribute(
    "class",
    "navbar navbar-expand-lg navbar-dark bg-dark"
  );
  navContainer.appendChild(div);

  //create footer
  let footerDiv = document.createElement("div");
  footerDiv.setAttribute("class", "text-center bg-dark p-2");
  let footerAnchor = document.createElement("a");
  footerAnchor.setAttribute("class", "link-light");
  footerAnchor.setAttribute("href", "#nav");
  footerDiv.appendChild(footerAnchor);
  footerText = document.createTextNode("To Top");
  footerAnchor.appendChild(footerText);
  let footer = document.getElementById("foot");
  footer.setAttribute("class", "fixed-bottom");
  footer.appendChild(footerDiv);
}
