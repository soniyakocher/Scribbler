
//Function to remove a post from the list 
function removeCard(card) {
    const delCard = document.getElementById(card);
    delCard.parentNode.removeChild(delCard);
}

//Function to open the particular post details
function openPost(author, heading, content) {
    const url = `../html/post.html?heading=${encodeURIComponent(heading.innerText)}&author=${encodeURIComponent(
        author.innerText
    )}&content=${encodeURIComponent(content.innerText)}`;
    window.location.href = url;
}