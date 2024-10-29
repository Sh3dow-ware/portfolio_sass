(() => {
    const copyrightElement = document.getElementById("copyright");
    copyrightElement.innerHTML = "&copy; 2024 - "+new Date().getFullYear()+" Magnus - All Rights Reserved.";
    copyrightElement.innerHTML += "<br/>Last Updated : "+document.lastModified;
})();