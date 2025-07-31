const reverseBtn = document.getElementById("reverse-button");
const main = document.querySelector("main");
const git = document.getElementById("git");
const lightGit = document.getElementById("light-git");

reverseBtn.addEventListener('click', () => {
    main.classList.toggle('reverse');
    document.body.classList.toggle('gradient-reverse');
    git.classList.toggle('reverse-git'); 
    lightGit.classList.toggle('reverse-git');
});