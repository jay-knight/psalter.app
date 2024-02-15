---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

## Version: KJV
→ [Swith to Brenton (1851)](/)  
→ [Swith to LXX2012](/lxx2012/)

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
