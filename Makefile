.PHONY: install
install:
	# rootless docker/podman recommended
	docker run --rm -it -v $PWD/_xml:/app -w /app denoland/deno install

_xml/eng-Brenton_usfx.xml:
	rm -f eng-Brenton_usfx.zip
	wget https://ebible.org/Scriptures/eng-Brenton_usfx.zip
	unzip -o -d _xml eng-Brenton_usfx.zip eng-Brenton_usfx.xml
	rm -f eng-Brenton_usfx.zip

_xml/eng-lxx2012_usfx.xml:
	rm -f eng-lxx2012_usfx.zip
	wget https://ebible.org/Scriptures/eng-lxx2012_usfx.zip
	unzip -o -d _xml eng-lxx2012_usfx.zip eng-lxx2012_usfx.xml
	rm eng-lxx2012_usfx.zip

_xml/eng-kjv_usfx.xml:
	rm -f eng-kjv_usfx.zip
	wget https://ebible.org/Scriptures/eng-kjv_usfx.zip
	unzip -o -d _xml eng-kjv_usfx.zip eng-kjv_usfx.xml
	rm eng-kjv_usfx.zip

DENO = docker run --rm -it -w /app -v $(PWD)/_xml:/app/_xml -v $(PWD)/_data:/app/_data denoland/deno
_data/brenton.yaml: _xml/eng-Brenton_usfx.xml _xml/xml_to_yaml.ts
	$(DENO) run --allow-read --allow-env --allow-write="_data" _xml/xml_to_yaml.ts \
		--in _xml/eng-Brenton_usfx.xml \
		--out _data/brenton.yaml

_data/lxx2012.yaml: _xml/eng-lxx2012_usfx.xml _xml/xml_to_yaml.ts
	$(DENO) run --allow-read --allow-env --allow-write="_data" _xml/xml_to_yaml.ts \
		--in _xml/eng-lxx2012_usfx.xml \
		--out _data/lxx2012.yaml

_data/kjv.yaml: _xml/eng-kjv_usfx.xml _xml/xml_to_yaml.ts
	$(DENO) run --allow-read --allow-env --allow-write="_data" _xml/xml_to_yaml.ts \
		--in _xml/eng-kjv_usfx.xml \
		--out _data/kjv.yaml

.PHONY: site
site: _data/*.yaml
	bundle exec jekyll build

sitemap.txt: site
	find _site -name 'index.html' -printf "https://psalter.app/%h/\n" | sed 's|/_site/|/|' |  sort -u > sitemap.txt

all: site sitemap.txt
