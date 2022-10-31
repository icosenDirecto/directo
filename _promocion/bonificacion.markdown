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
                * Tope $11.000
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
        {% assign legalidad = legal | where: "categories", "bonificacion" | first %}
            <h2>{{ legalidad.title }}</h2>
            <p>{{ legalidad.content | markdownify }}</p>
        {% endfor %}
    </div>
</section>