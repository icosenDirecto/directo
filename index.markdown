---
title: Index
hero:
  title: |-
    Tu préstamo
    sin tantas vueltas
  subtitle: |-
    100% online
    Subí tu selfie + foto DNI y lo acreditamos en tu cuenta
  link: https://mi.directo.com.ar/Cuenta/Ingresar?ePedirPrestamo=True
  linkText: Pedí tu préstamo
  image: "/uploads/credito-phone.png"
layout: home
---

{% include head.html %}

<body>

<section class="bg_degrade bgCorners">
			<div class="main-container hero heroImage">
				<div class="heroTitle moduleLarge">
					<h1 class="heroTitleXL">{{ page.hero.title }}</h1>
					<h3>{{ page.hero.subtitle }}</h3>
					<button class="btn btn_large btnGreen btn-green__hover">
						<a href="{{page.hero.link}}" target="_self">{{page.hero.linkText}}</a>
					</button>
				</div>

        <div class="heroImagePosition">
	        <img src="{{page.hero.image}}" alt="Encontrá tu préstamo online fácil y rápido.">
	      </div>
      </div>
</section>



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

    {% include bootstrap.html %}

</body>