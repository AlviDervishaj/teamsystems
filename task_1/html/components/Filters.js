let isFiltersOpened = false;
const projects = document.getElementsByClassName("project");

function handleFiltersToggle() {
  isFiltersOpened = !isFiltersOpened;
  const dropdown = document.querySelector("#filters_dropdown_toggle");
  if (!dropdown) return;
  if (!isFiltersOpened) {
    dropdown.style.display = "none";
    return;
  }
  dropdown.style.display = "flex";
  return;
}



function handleItemClick(event) {
  const value = event.currentTarget.value;
  const result = Array.prototype.filter.call(
    projects,
    (project) => {
      if (project.dataset.categories === value) {
        project.style.display = "block"
      }
      else {
        project.style.display = "none"
      }
      return project;
    }
  );
  console.log({ result });
}

class Filters extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
<div class="filters">
  <button onClick={handleFiltersToggle()} class="filter_button ease-in-out">
    <p>
      Filter by
    </p>
    <img class="filter_icon" src="./images/filter.svg" alt="Filter Icon" />
  </button>
  <ul id="filters_dropdown_toggle" class="filters_dropdown">
    <li>
      <button  onClick={handleItemClick(event)} class="filter_item" value="web_dev">
        Web Development
      </button>
    </li>
    <li>
      <button onClick={handleItemClick(event)} class="filter_item" value="terminal">
        Terminal
      </button>
    </li>
  </ul>
</div>
`;
  }
}

customElements.define('filter-projects-component', Filters);
