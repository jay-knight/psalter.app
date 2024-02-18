_data/brenton.yaml: _xml/eng-Brenton_usfx.xml _xml/xml_to_yaml.ts
	deno run --allow-read --allow-env --allow-write="_data" _xml/xml_to_yaml.ts \
		--in _xml/eng-Brenton_usfx.xml \
		--out _data/brenton.yaml

_data/lxx2012.yaml: _xml/eng-lxx2012_usfx.xml _xml/xml_to_yaml.ts
	deno run --allow-read --allow-env --allow-write="_data" _xml/xml_to_yaml.ts \
		--in _xml/eng-lxx2012_usfx.xml \
		--out _data/lxx2012.yaml

_data/kjv.yaml: _xml/eng-kjv_usfx.xml _xml/xml_to_yaml.ts
	deno run --allow-read --allow-env --allow-write="_data" _xml/xml_to_yaml.ts \
		--in _xml/eng-kjv_usfx.xml \
		--out _data/kjv.yaml

.PHONY: site

site: _data/*.yaml
	bundle exec jekyll build

sitemap.txt: site
	find _site -name 'index.html' -printf "https://psalter.app/%h/\n" | sed 's|/_site/|/|' |  sort -u > sitemap.txt

all: site sitemap.txt
