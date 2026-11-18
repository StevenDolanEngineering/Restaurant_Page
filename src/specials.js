export function loadSpecials() {
    const content = document.querySelector("#content");

    const specialsDiv = document.createElement("div");
    specialsDiv.classList.add("specials-container");

    const specialsTitle = document.createElement("h2");
    specialsTitle.classList.add("specials-title");
    specialsTitle.textContent = "Specials";

    function createSpecialsInfo(string) {
        
        const specialsRow = document.createElement("div");
        specialsRow.classList.add("specials-row");

        const specialsText = document.createElement("p");
        specialsText.classList.add("specials-text");
        specialsText.textContent = string;

        specialsRow.appendChild(specialsText);
        return specialsRow;
    };

    function createSpecialsSection(sectionName) {

        const section = document.createElement("section");
        section.classList.add("specials-section");

        const specialsHeading = document.createElement("h3");
        specialsHeading.textContent = sectionName.category;
        section.appendChild(specialsHeading);

        const row = createSpecialsInfo(sectionName.info);
        section.appendChild(row);

        return section;
    }

    const dailySpecials = [
        {
            category: "Moonlight Sonata Monday",
            info: "Just because the weekend is over doesn't mean the fun has to stop! Tonight we have an open floor for dancing with live music from a local artist!"
        },
        {
            category: "Tipsy Tuesday",
            info: "Who doesn't love a good cocktail? Come try some of our new creations as cocktails are $2 off tonight!"
        },
        {
            category: "Wine Wednesday",
            info: "Help yourself get over the hump of the week with some wine! Wine glasses are $2 off tonight!"
        },
        {
            category: "Tinder Date Thursday",
            info: "Bring proof that your date happened because of an online dating service and receive one free pastry if you order two drinks!"
        }        
    ];
    specialsDiv.appendChild(specialsTitle);

    dailySpecials.forEach((sectionName) => {
        const section = createSpecialsSection(sectionName);
        specialsDiv.appendChild(section);
    });


    content.appendChild(specialsDiv);
}