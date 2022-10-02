---
title: Index
layout: home
---

Hola

<div>
{% for include_relative bloqueshome/registrocliente.html %}
</div>


<div>
{% for comercio in site.data.comercios %}
<div class="{{ comercio.categoria }}">
<p> {{ comercio.nombre }} </p>
<a href="{{ comercio.web }}">
{{ comercio.web }}
</a>
<p> {{ comercio.local }}</p>
</div>
{% endfor %}
</div>