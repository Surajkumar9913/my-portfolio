async function fetchData() {
    const response = await fetch("skills.json");
    const data = await response.json();
    return data;
}
function showSkills(data) {
    console.log("showSkills", data);

    let skillsDiv = document.getElementById("skills-content");
    let skillsHTML = "";

    data.map(
        (item) =>
            (skillsHTML += `<div class="skillsItem">
        <img src="${item.icon}">
        <p>${item.name}</p>
        </div>`)
    );
    skillsDiv.innerHTML = skillsHTML;
}
fetchData().then((data) => showSkills(data));
