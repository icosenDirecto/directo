---
title: Preguntas Frecuentes
date: 2022-10-16 10:55:00 Z
---

{% for preguntas-frecuentes in site.preguntas-frecuentes %}
  <h2>{{ preguntas-frecuentes.title }}</h2>
  <p>{{ preguntas-frecuentes.content | markdownify }}</p>
{% endfor %}
