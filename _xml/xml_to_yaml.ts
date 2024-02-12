import { parseArgs } from "https://deno.land/std@0.207.0/cli/parse_args.ts"
import { JSDOM } from "jsdom";
import { stringify } from "https://deno.land/std@0.215.0/yaml/stringify.ts"

const flags = parseArgs(Deno.args, {
  string: ["in", "out"],
})

const filename = flags.in
let psalms = {}

enum SectionType {
  Verses = "verses",
  Inscription = "inscription",
}

JSDOM.fromFile(filename, {}).then(dom => {
  const psalms_book = dom.window.document.querySelector("book#PSA")
  let chapter: number = 0
  let verse: number = 0
  let section_type: SectionType = "verses"
  let space: string = ""

  psalms_book.childNodes.forEach((node) => {
    switch (node.nodeName) {
      case 'c':
        chapter += 1
        psalms[chapter] = {}
        verse = 0
        //console.log(`Chapter: ${chapter}`)
        break
      case 'p':
      case 'd':
        if (node.getAttribute("style") != node.nodeName) {
          break
        }
        section_type=node.nodeName == 'p' ? SectionType.Verses : SectionType.Inscription
        //console.log(section_type)
        node.childNodes.forEach(node => {
          switch (node.nodeName) {
            case 'v':
              // previous verse!
              verse += 1
              break
            case 'add':
            case 'sc':
            case '#text':
              if (!psalms[chapter][section_type]) {
                  psalms[chapter][section_type] = {}
              }
              if (!psalms[chapter][section_type][verse]) {
                  psalms[chapter][section_type][verse] = "" 
                  space = ""
              }
              if (node.textContent !== undefined) {
                psalms[chapter][section_type][verse] += space + node.textContent.replace(/\n/gm, " ").trim()
                space = " "
                psalms[chapter][section_type][verse] = psalms[chapter][section_type][verse].replace(/ ([\.,:;])/g, "$1").replace(/  */g, " ").trim()
              }
              break
          }
        })
        break
      default:
        break
    }
  })
  //console.log(psalms)
  //console.log(stringify(psalms))
  Deno.writeTextFile(flags.out, stringify(psalms, {lineWidth: 80}))
})
