const userInput = () => {
    let searchInput = document.querySelector('.search-component__input')
    let text = searchInput.value.trim();
    if (text.length >= 2) {
        let resultUsers = searchByName(text, users);
        
        renderSearchResults(resultUsers, ".search-component__results")
    }
}

const searchByName = (partialName, users) => {
    let resultUsers = [];

    users.forEach(
        element => {
            if (element.name.toLowerCase().startsWith(partialName.toLowerCase())) {
                resultUsers.push(element);
            }
        } 
    )

    // for (let i=0; i < users.length; i++) {
    //     if (users[i].name.toLowerCase().startsWith(partialName.toLowerCase())) {
    //         resultUsers.push(users[i]);
    //     } 
            
    return resultUsers;
}

const renderSearchResults = (resultUsers, rootSelector) => {
    const rootElement = document.querySelector(rootSelector);
    let html = '<ul class="search-component__results-list">'

    if (resultUsers.length == 0) {
        html+= `<li class="search-component__results-list__item">
        no results found...
        </li>`
    } else {

    resultUsers.forEach(element =>{ 

        if (element.lastOnline>6){
        html += `<li class="search-component__results-list__item">
                <img src ="${element.avatar}"/>
                <span class="offline"> </span> ${element.name}
                </li>`}
        else {
            html += `<li class="search-component__results-list__item">
                    <img src ="${element.avatar}"/>
                    <span class="online"> </span> ${element.name}
                    </li>`
            }})
        }

    // for (let i=0; i <resultUsers.length; i++){
    //     html += `<li class="search-component__results-list__item">
    //                 <img src ="${resultUsers[i].avatar}"/> ${resultUsers[i].name}
    //             </li>`
    // }

    html += '</ul>';
    rootElement.innerHTML = html;
}