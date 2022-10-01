---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

<div>
    {% for comercio in site.data.comercios %}
    <div class="{{ comercio.categoria }}">
        <p> {{ comercio.nombre }} </p>
        <a href="{{ comercio.web }}">
          {{ comercio.web }}
        </a>
        <p> {{ comercio.local }}</p>
        <img src="{{ comercio.imagen }}" alt="">
    </div>
    {% endfor %}
    </div>
