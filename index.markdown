---
title: Index
hero:
  title: Tu préstamo sin tantas vueltas
  subtitle: 100% online. Subí tu selfie + foto DNI y lo acreditamos en tu cuenta
  link: https://mi.directo.com.ar/Cuenta/Ingresar?ePedirPrestamo=True
  image: "/uploads/credito-phone.png"
layout: home
---

Hola prueba v1.0

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
