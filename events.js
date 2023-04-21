// Your code here
window.addEventListener("DOMContentLoaded", (event) => {
    // Alert the user when the dom has loaded
    alert("DOM has loaded");

    // Change background to red when #red-input contains the word red
    const redInput = document.getElementById("red-input");
    redInput.addEventListener("input", redBgInput);

    // Add a new <li> element when the #add-item button is clicked
    const addItem = document.getElementById("add-item");
    addItem.addEventListener("click", addItemsFunction);

    // Change section bg to the color selected in #color-select
    const colorSelect = document.getElementById("color-select");
    colorSelect.addEventListener("input", selectColorFunction);

    // Remove event listeners
    const removeListenerBtn = document.getElementById("remove-listeners");
    removeListenerBtn.addEventListener("click", event => {
        redInput.removeEventListener("input", redBgInput);
        addItem.removeEventListener("click", addItemsFunction);
        colorSelect.removeEventListener("input", selectColorFunction);

        // Check if the "Restore Listeners" button has already been created
        const restoreListenersBtn = document.getElementById("restore-listeners");

        if (!restoreListenersBtn) {
            // Create the "Restore Listeners" button
            const restoreListeners = document.createElement("button");
            restoreListeners.id = "restore-listeners";
            restoreListeners.innerHTML = "Restore Listeners";
            document.getElementById("section-4").appendChild(restoreListeners);

            // Add an event listener to the "Restore Listeners" button
            restoreListeners.addEventListener("click", event => {
                redInput.addEventListener("input", redBgInput);
                addItem.addEventListener("click", addItemsFunction);
                colorSelect.addEventListener("input", selectColorFunction);
            });
        }
    });

    // Add a keydown event listener if the pressed key is the space bar
    document.addEventListener("keydown", event => {
        if (event.code === "Space") {
            alert("Space bar was pressed!");
        }
    });

    // Create a new section element
    const hoverSection = document.createElement("section");
    hoverSection.id = "section-4";

    const hoverDiv = document.createElement("div");
    hoverDiv.id = "hover-div";
    hoverDiv.textContent = "Hover over me!";
    hoverSection.appendChild(hoverDiv);

    // Add the section element to the document body
    document.body.appendChild(hoverSection);

    // Add a mouseover event listener to the hover div
    hoverDiv.addEventListener("mouseover", event => {
        hoverDiv.textContent = "You are hovering over me!";
    });

    // Add a mouseout event listener to the hover div
    hoverDiv.addEventListener("mouseout", event => {
        hoverDiv.textContent = "Hover over me!";
    });
});



const redBgInput = (event) => {
    const input = document.getElementById("red-input");
    if (input.value === "red") {
        input.style.backgroundColor = "red"
    } else {
        input.style.backgroundColor = "transparent";
    }
}

const addItemsFunction = (event) => {
    const li = document.createElement("li");
    li.innerText = document.getElementById("list-add").value;
    const ul = document.getElementsByTagName("ul");
    ul[0].append(li);
}

const selectColorFunction = (event) => {
    const sectionThree = document.getElementById("section-3");
    const bgColor = document.getElementById("color-select").value;
    sectionThree.style.backgroundColor = bgColor;
}
