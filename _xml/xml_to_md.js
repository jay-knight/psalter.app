var fs = require('fs')
var fsPromises = require('fs/promises')
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
var filename = "eng-Brenton_vpl.xml"

handleError = (err) => console.error(err)

// create all psalm files and write the front matter
for (chapter=1; chapter<=151; chapter++) {
    fs.mkdirSync(`../psalm/${chapter}`, {recursive: true} )
    let fd = fs.openSync(`../psalm/${chapter}/index.md`, 'w+')
    fs.writeSync(fd, "---\n")
    fs.writeSync(fd, `title: Psalm ${chapter}\n`)
    fs.writeSync(fd, "---\n")
    fs.writeSync(fd, `# Psalm ${chapter}\n\n`)
}

// create all kathisma files and write the front matter
for (kathisma=1; kathisma<=20; kathisma++) {
    fs.mkdirSync(`../kathisma/${kathisma}`, {recursive: true} )
    let fd = fs.openSync(`../kathisma/${kathisma}/index.md`, 'w+')
    fs.writeSync(fd, "---\n")
    fs.writeSync(fd, `title: Kathisma ${kathisma}\n`)
    fs.writeSync(fd, "---\n")
    fs.writeSync(fd, `# Kathisma ${kathisma}\n\n`)
    fs.writeSync(fd, `Coming Soon`)
}

fs.readFile(filename, "utf-8", function (err,data) {
    const psalter = new JSDOM(data).window.document

    psalter.querySelectorAll("v").forEach((verse) => {
        chapter = verse.getAttribute("c")
        fs.appendFileSync(`../psalm/${chapter}/index.md`, `<sup>${verse.getAttribute("v")}</sup> ${verse.textContent}`)
    })
});
