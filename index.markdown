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
  linkB1: https://my.asisteclick.com/V2/request.php?id=4159170-4425&deptid=0&pagex=testing_bot&hashbot=collection
  linkB1Text: Pagar con tarjeta de débito
  linkB2: "/medios-de-pago.html"
  linkB2Text: Pagar con otros medios
  image: 
seccionC:
  title: Sentite protegido
  subtitle: Te ayudamos a cuidar eso que más querés
  link: "/asistencias.html"
  linkText: Servicios para vos
  image: "/uploads/196.png"
seccionD:
  title: Conocé los beneficios de ser un comercio asociado
  subtitle: Potenciá tus ventas en el acto con Mínimos Requisitos y Aprobación Online
  link: 
  linkText: Conocé más
  image: "/uploads/5.png"
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
</section>

<section>
  <div>
    <div>
      <h2>{{page.seccionB.title}}</h2>
      <p>{{page.seccionB.subtitle}}</p>
      <a href="{{page.seccionB1.link}}" target="_self"><p>{{page.seccionB1.linkText}}</p></a>
      <a href="{{page.seccionB2.link}}" target="_self"><p>{{page.seccionB2.linkText}}</p></a>
    </div>
    <div>
      <img src="{{page.seccionB.image}}" alt="">
    </div>
  </div>
</section>

<section>
  <div>
    <div>
      <h2>{{page.seccionC.title}}</h2>
      <p>{{page.seccionC.subtitle}}</p>
      <button class="btn btn_large">
      <a href="{{page.seccionC.link}}" target="_self"><p>{{page.seccionC.linkText}}</p></a>
      </button>
    </div>
    <div>
      <img src="{{page.seccionC.image}}" alt="">
    </div>
  </div>
</section>

<section>
  <div>
    <div>
      <h2>{{page.seccionD.title}}</h2>
      <p>{{page.seccionD.subtitle}}</p>
      <button class="btn btn_large">
      <a href="{{page.seccionD.link}}" target="_self"><p>{{page.seccionD.linkText}}</p></a>
      </button>
    </div>
    <div>
      <img src="{{page.seccionD.image}}" alt="">
    </div>
  </div>
</section>

{% comment %}

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

{% endcomment %}

{% include footer.html %}