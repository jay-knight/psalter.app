---
layout: home
title: Online Psalter (Brenton)
---

## Version: Brenton Septuagint (1851)
<ul id="versions">
  <li><a href="/lxx2012/">Switch to LXX2012</a></li>
  <li><a href="/kjv/">Switch to KJV</a></li>
</ul>

## The Psalms
<ul id="psalms">
  {% for psalm in (1..151) %}
    <li><a href="psalm/{{psalm}}/">Psalm {{psalm}}</a></li>
  {% endfor %}
</ul>

## The Kathisma
<ul id="kathisma">
  {% for kathisma in (1..20) %}
    <li><a href="kathisma/{{kathisma}}/">Kathisma {{kathisma}}</a></li>
  {% endfor %}
</ul>
