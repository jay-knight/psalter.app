window.addEventListener("load", (le) => {
    document
        .getElementById("theme-toggle")
        .addEventListener("click", e => {
            document
                .body
                .classList
                .toggle("dark-theme")
        })
})
