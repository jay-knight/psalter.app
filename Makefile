_data/brenton.yaml: _xml/eng-Brenton_usfx.xml _xml/xml_to_yaml.ts
	deno run --allow-read --allow-env --allow-write="_data" _xml/xml_to_yaml.ts \
		--in _xml/eng-Brenton_usfx.xml \
		--out _data/brenton.yaml

.PHONY: site

site: _data/*.yaml
	bundle exec jekyll build
