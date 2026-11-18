export function loadMenu() {
    const content = document.querySelector("#content");

    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menu-container");

    const menuTitle = document.createElement("h2");
    menuTitle.classList.add("menu-title");
    menuTitle.textContent = "Menu";

    function createMenuItem(name, price) {
        
        const itemRow = document.createElement("div");
        itemRow.classList.add("menu-item");

        const itemName = document.createElement("span");
        itemName.classList.add("item-name");
        itemName.textContent = name;

        const dots = document.createElement("span");
        dots.classList.add("item-dots");

        const itemPrice = document.createElement("span");
        itemPrice.classList.add("item-price");
        itemPrice.textContent = price;

        itemRow.append(itemName, dots, itemPrice);
        return itemRow;
    };

    function createMenuSection(sectionName) {
        const section = document.createElement("section");
        section.classList.add("menu-section");

        const menuHeading = document.createElement("h3");
        menuHeading.textContent = sectionName.category;
        section.appendChild(menuHeading);

        sectionName.items.forEach((dish) => {
            const row = createMenuItem(dish.name, dish.price);
            section.appendChild(row);
        });

        return section;
    }

    const menuItems = [
        {
            category: "Food",
            items: [
                { name: "Slice of Cake", price: "$5" },
                { name: "Slice of Cheesecake", price: "$6" },
                { name: "Mousse Parfait", price: "$6" },
                { name: "Opera Cake", price: "$7" }
            ]
        },
        {
            category: "Drinks",
            items: [
                { name: "Espresso", price: "$4" },
                { name: "Latte", price: "$5" },
                { name: "Sparkling Water", price: "$3"}
            ]
        },
        {
            category: "Cocktails",
            items: [
                {name: "Espresso Martini", price: "$10" },
                {name: "Orange Dream", price: "$9" },
                {name: "Green with Envy", price: "$10" },
                {name: "Sidecar", price: "$10" }
            ]
        }
    ];
    menuDiv.appendChild(menuTitle);

    menuItems.forEach((sectionName) => {
        const section = createMenuSection(sectionName);
        menuDiv.appendChild(section);
    });


    content.appendChild(menuDiv);
}