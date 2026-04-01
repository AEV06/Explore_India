let currentFilter = "all";

function filterSelection(category) {
    currentFilter = category;
    searchDestinations(); // apply filter + search together
}

function searchDestinations() {
    const input = document.getElementById("searchBox").value.toLowerCase();
    const items = document.getElementsByClassName("gallery-item");

    for (let i = 0; i < items.length; i++) {
        const text = items[i].innerText.toLowerCase();

        const matchesFilter =
            currentFilter === "all" || items[i].classList.contains(currentFilter);

        const matchesSearch = text.includes(input);

        if (matchesFilter && matchesSearch) {
            items[i].style.display = "block";
        } else {
            items[i].style.display = "none";
        }
    }
}
