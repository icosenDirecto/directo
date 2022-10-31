---
title: Bonificacion
date: 2022-10-28 12:45:00 Z
layout: default
---

<section>
    <div class="main-container moduleHeaderEspecial">
        <div>
            <img src="/assets/48.png" alt="">
        </div>

        <div>
            <div>
                <div>
                    <h1>Participá por una bonificación del 100% de tu próxima cuota*</h1>
                    <p>Registrate en <a href="https://mi.directo.com.ar/Cuenta/Registro?utm_source=Sorteo&utm_medium=SorteoUltimaCuota" class="linkDestacado">mi.directo.com.ar</a> y ya estás participando.<br>
                    Así de simple. Así de Directo.
                    </p>
                </div>
            <div>
                <button class="btn btn_large btnGreen btn-green__hover">
                <a href="https://mi.directo.com.ar/Cuenta/Registro?utm_source=Sorteo&utm_medium=SorteoUltimaCuota" target="_self">Quiero ganarme la bonificación</a>
                </button>
            </div>
        </div>

        <div class="moduleDetalle">
            <ul class="listLegales">
                <li>
                * Tope $12.000
                </li>
                <li>
                <a href="#basesycondiciones"><i class="fa-solid fa-angle-down"></i> Ver bases y condiciones de la promoción</a>
                </li>
            </ul>
        </div>
    </div>
</section>

<section id="basesycondiciones">
    <div class="main-container moduleLegales">
        {% for legal in site.legales %}
        {% if legales.categories == "prueba" %}
            <h2>{{ legal.title }}</h2>
            <p>{{ legal.content | markdownify }}</p>
        {% endif %}    
        {% endfor %}
    </div>
</section>

<ul>
<!-- uses categories of the current post -->
<!--I used theCategory to avoid confusion, use any variable you want -->
{% for theCategory in page.categories %} 
    {% assign popular_posts = site.popular_posts | where:"category", theCategory %} 
      {% for page in popular_posts | limit:3 %}
         <li>
         <a href="{{ page.url }}" title="{{ page.title }}">{{ page.title }}</a>
         </li>
      {% endfor %}
{% endfor %}
</ul>