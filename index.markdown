---
title: Index
hero:
  title: Tu préstamo sin tantas vueltas
  subtitle: 100% online Subí tu selfie + foto DNI y lo acreditamos en tu cuenta
  link: https://mi.directo.com.ar/Cuenta/Ingresar?ePedirPrestamo=True
  linkText: Pedí tu préstamo
  image: "/uploads/credito-phone.png"
seccionA:
  title: Tus préstamos
  subtitle: Ingresá a tu cuenta y accedé al detalle de tus préstamos.
  link: https://mi.directo.com.ar/Cuenta/Ingresar
  linkText: Ingresar
  image: "/uploads/97.png"
seccionB:
  title: Elegí cómo pagar tu préstamo
  subtitle: Conocé los medios de pago más convenientes para pagar las cuotas mensuales
    de tu préstamo.
  linkA: https://my.asisteclick.com/V2/request.php?id=4159170-4425&deptid=0&pagex=testing_bot&hashbot=collection
  linkAText: Pagar con tarjeta de débito
  linkB: "/medios-de-pago.html"
  linkBText: Pagar con otros medios
  image: 
layout: home
---

{% include head.html %}

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

<section>
<div>

<button class="btn btn_large btnGreen btn-green__hover">
						<a href="{{page.section1.link}}" target="_self">{{page.section1.linkText}}</a>
					</button>

</div>
</section>
<div>
    <div>
    <h2>{{page.seccionA.title}}</h2>
    <p>{{page.seccionA.subtitle}}</p>
    <button class="btn btn_large">
						<a href="{{page.seccionA.link}}" target="_self">{{page.seccionA.linkText}}</a>
					</button>
    </div>
    <div>
    <img src="{{page.seccionA.image}}" alt="">
    </div>
</div>
<section>

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

{% include footer.html %}