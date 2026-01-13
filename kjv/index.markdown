---
layout: home
title: Online Psalter (KJV)
---

## Version: KJV
<ul id="versions">
  <li><a href="/">Switch to Brenton (1851)</a></li>
  <li><a href="/lxx2012/">Switch to LXX2012</a></li>
</ul>

## The Psalms
<ul id="psalms">
    {% for psalm in (1..150) %}
        <li><a href="psalm/{{psalm}}/">Psalm {{psalm}}</a></li>
    {% endfor %}
</ul>

## The Kathisma
<ul id="kathisma">
    {% for kathisma in (1..20) %}
        <li><a href="kathisma/{{kathisma}}/">Kathisma {{kathisma}}</a></li>
    {% endfor %}
</ul>
