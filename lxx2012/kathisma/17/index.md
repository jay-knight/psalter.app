---
version: lxx2012
kathisma: 17
title: Kathisma 17 (LXX2012)
numbering: greek
psalm: "118"
custom_display: true
version: "brenton"
verses: [[1,72], [73,131], [132,176]]
layout: kathisma
---

{% include pre_glory.html %}

<h1 class="stasis-header">First Stasis</h1>

<h2 class="psalm-title">Psalm 118</h2>

{% assign verses = page.verses[0] %}
{% include psalm.html version=page.version psalm=page.psalm verses=verses %}

{% include first_glory.html %}

<h1 class="stasis-header">Second Stasis</h1>

{% assign verses = page.verses[1] %}
{% include psalm.html version=page.version psalm=page.psalm verses=verses %}

{% include first_glory.html %}

<h1 class="stasis-header">Third Stasis</h1>

{% assign verses = page.verses[1] %}
{% include psalm.html version=page.version psalm=page.psalm verses=verses %}

{% include final_glory.html %}
