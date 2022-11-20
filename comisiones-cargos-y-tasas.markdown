---
title: Comisiones, cargos y tasas
date: 2022-11-19 14:16:00 Z
financiacion:
  electro-bicicleta:
    tna:
      titulo: TNA
      min: 42,10%
      max: 221,86%
    plazo:
      titulo: Plazo
      min: 6
      max: 24
    tea:
      titulo: TEA
      min: 52,36%
      max: 624,75%
    cftea:
      titulo: CFTEA
      min: 64,17%
      max: 987,29%
layout: legales
---

<div class="moduleCredito">
  <div>
    <p>{{page.financiacion.electro-bicicleta.titulo}}</p>
  </div>
  <div>
    <p>{{page.financiacion.electro-bicicleta.tna.titulo}}</p>
    {{page.financiacion.electro-bicicleta.tna.min}}
    {{page.financiacion.electro-bicicleta.tna.max}}
  </div>

</div>

<div class="moduleCredito">
Prueba "sep=;"
{% for electro in site.data.electro-bicicleta %}
{{ electro.titulo }}
{{ electro.tna-min }}
{{ electro.tna-max }}
{% endfor %}
</div>