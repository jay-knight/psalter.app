var fs = require('fs')
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const yaml = require('js-yaml');
var filename = "eng-Brenton_vpl.xml"

let psalms = {}
//fs.writeFileSync(yml_file, "")

for (chapter=1; chapter<=151; chapter++) {
    const filename = `brenton/PS${chapter}.html`
    psalms[chapter] = {}
    const data = fs.readFileSync(filename, "utf-8")
    const doc = new JSDOM(data).window.document
    const chapter_node = doc.querySelector("div.chapter")

    chapter_node.querySelectorAll("div.d,div.p").forEach(section => {
        const is_inscription = section.classList.contains("d")
        const section_type = is_inscription ? 'inscription' : 'verses'
        section.querySelectorAll("span.v").forEach(verse => {
            verse.querySelectorAll("span.v-num, span.note").forEach(n => n.remove())
            const verse_id = verse.getAttribute("data-id")
            const verse_number = parseInt(verse_id.split("_").pop())
            const verse_text = verse.textContent.trim()
            if (!psalms[chapter][section_type]) {
                psalms[chapter][section_type] = {}
            }
            psalms[chapter][section_type][verse_number] = verse_text
            //fs.appendFileSync(yml_file, `- verse: ${verse.getAttribute("v")}\n  text: "${verse.textContent}"\n`)
        })
    })
}

fs.writeFileSync("../_data/brenton.yaml", yaml.dump(psalms))
