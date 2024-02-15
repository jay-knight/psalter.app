# psalter.app
https://psalter.app/

This is the jekyll site that generates https://psalter.app/, a simple static text-only psalter, including pages for the Kathisma groupings used by the Orthodox Church. 

The text of this psalter is from the [Brenton](https://psalter.app/) translation of the Septuagint, [LXX2012](https://psalter.app/lxx2012) (and update to Brenton's with modern American English) and the [KJV](https://psalter.app/kjv). All three translations are in the public domain.

The text is sourced from the USFX format available from https://ebible.org/ (see the `_xml` directory), with a typescript script to extract just the text to YAML (into the `_data` directory). That data is then used by the jekyll pages/layouts to provide a clean, distraction-free interface to read individual psalms or the kathismata.
