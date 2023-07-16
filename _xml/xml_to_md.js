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
    fs.writeSync(fd, `version: brenton\n`)
    fs.writeSync(fd, `psalm: ${chapter}\n`)
    if (chapter > 1) {
        fs.writeSync(fd, `previous: ${chapter - 1}\n`)
    }
    if (chapter < 151) {
        fs.writeSync(fd, `next: ${chapter + 1}\n`)
    }
    fs.writeSync(fd, `layout: psalm\n`)
    fs.writeSync(fd, "---\n")

    fs.mkdirSync(`../_data/brenton`, {recursive: true} )
    fs.writeFileSync(`../_data/brenton/psalm${chapter}.yml`, "")
}

fs.readFile(filename, "utf-8", function (err,data) {
    const psalter = new JSDOM(data).window.document

    psalter.querySelectorAll("v").forEach((verse) => {
        chapter = verse.getAttribute("c")
        //fs.appendFileSync(`../psalm/${chapter}/index.md`, `<div class="psalm-verse"><sup class="verse-number">${verse.getAttribute("v")}</sup> ${verse.textContent}</div>`)
        fs.appendFileSync(`../_data/brenton/psalm${chapter}.yml`, `- verse: ${verse.getAttribute("v")}\n  text: "${verse.textContent}"\n`)
    })
});
