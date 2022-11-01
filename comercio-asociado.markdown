---
title: Comercio Asociado
date: 2022-11-01 20:24:00 Z
hero:
  title: Conocé las ventajas de adherir tu comercio
  subtitle: Vos focalizate en aumentar tus ventas con nuestra financiación, que del
    cobro nos encargamos nosotros.
  link: 
  linkText: Sumate a Directo
  image: "/uploads/114D.png"
seccionA:
  title: Ventajas de asociar tu comercio
  feature1: Otorgamos Créditos a tus clientes sólo con DNI y en cuotas fijas en pesos
  feature2: Aumentá tu ticket promedio de ventas, facturá más y empezá a cobrar de
    inmediato sin costos ni aranceles
  feature3: Otorgale a tus clientes el crédito en sólo 3 minutos, 100% on line y al
    instante con nuestra operatoria sin papeles
  feature4: Financiamos el 100 % de la compra de tu cliente y si no nos paga, nosotros
    te pagamos igual
  feature5: Ya calificamos a 1.000.000 de clientes, con una financiación superior
    a los 5.000 MILLONES de PESOS
  feature6: Realizamos campañas de marketing para incentivar tus ventas.
seccionB:
  title: "¿Cómo podes adherir tu comercio?"
  subtitle: Muy fácil, con los datos requeridos podes comenzar a operar en solo 72
    HS.
  feature1: Identidad del titular del comercio o de su representante
  feature2: Documentación respaldatoria de situación patrimonial y/o impositiva
  feature3: Constancia de inscripción de AFIP
  feature4: Habilitación municipal o en trámite
  feature5: Cuenta bancaria para acreditarte el dinero
  feature6: 
form:
  title: Quiero adherir mi comercio
  subtitle: Dejanos tus datos y nos estaremos comunicando con vos.
layout: default
---

<section class="bg_degrade_2 bgCorners">
			<div class="main-container hero">
				<div class="heroTitle sectionIzquierda">
					<h1> {{page.hero.title}} </h1>
					<h5> {{page.hero.subtitle}} </h5>
					<button class="btn btn_large btnBlue">
						<a href="" target="_self">{{page.hero.linkText}}</a>
					</button>
				</div>
				<div class="hero__image sectionDerecha">
					<img src="{{page.hero.image}}">
				</div>
			</div>
</section>

<section class="bgWhite">
			<div class="main-container modulo">
				<div class="moduleTitle">
					<h2>{{page.seccionA.title}}</h2>
				</div>

				<div class="comerciosFeatures">
					<div class="comerciosFeaturesList">
						<i class="fa-solid fa-hand-holding-dollar fa-lg comerciosIconos iconLarge"></i>
						<p>Otorgamos Créditos a tus clientes sólo con DNI y en cuotas fijas en pesos</p>
					</div>
					<div>
						<i class="fa-solid fa-receipt fa-lg comerciosIconos iconLarge"></i>
						<p>Aumentá tu ticket promedio de ventas, facturá más y empezá a cobrar de inmediato sin costos
							ni aranceles</p>
					</div>
					<div>
						<i class="fa-solid fa-stopwatch fa-lg comerciosIconos iconLarge"></i>
						<p>Otorgale a tus clientes el crédito en sólo 3 minutos, 100% on line y al instante con nuestra
							operatoria sin papeles</p>
					</div>
					<div>
						<i class="fa-solid fa-handshake-simple fa-lg comerciosIconos iconLarge"></i>
						<p>Financiamos el 100 % de la compra de tu cliente y si no nos paga, nosotros te pagamos igual
						</p>
					</div>
					<div>
						<i class="fa-solid fa-ranking-star fa-lg comerciosIconos iconLarge"></i>
						<p>Ya calificamos a 1.000.000 de clientes, con una financiación superior a los 5.000 MILLONES de
							PESOS</p>
					</div>
					<div>
						<i class="fa-solid fa-bullhorn fa-lg comerciosIconos iconLarge"></i>
						<p>Realizamos campañas de marketing para incentivar tus ventas.</p>
					</div>
				</div>
			</div>
</section>

<section class="bgCeruleo">
	<div class="moduloDestacado">
		<img class="img123" src="\assets\123.png">
			<p class="moduloDestacadoText">6000 puntos de venta<br> adheridos en todo el país</p>
	</div>
</section>

<section class="bgWhite">
			<div class="main-container modulo">
				<div class="moduleTitle">
					<h2>{{page.seccionB.title}}</h2>
					<p>{{page.seccionB.subtitle}}</p>
				</div>

				<div class="comerciosFeatures">
					<div>
						<i class="fa-solid fa-fingerprint fa-lg comerciosIconos iconLarge"></i>
						<p>Identidad del titular del comercio o de su representante</p>
					</div>
					<div>
						<i class="fa-solid fa-magnifying-glass-chart fa-lg comerciosIconos iconLarge"></i>
						<p>Documentación respaldatoria de situación patrimonial y/o impositiva</p>
					</div>
					<div>
						<i class="fa-solid fa-stamp fa-lg comerciosIconos iconLarge"></i>
						<p>Constancia de inscripción de AFIP</p>
					</div>
					<div>
						<i class="fa-solid fa-file-lines fa-lg comerciosIconos iconLarge"></i>
						<p>Habilitación municipal o en trámite</p>
					</div>
					<div>
						<i class="fa-solid fa-landmark fa-lg comerciosIconos iconLarge"></i>
						<p>Cuenta bancaria para acreditarte el dinero</p>
					</div>
				</div>
			</div>
</section>

<section class="servicios main-container">
	<div class="moduleTitle">
		<h2>{{page.form.title}}</h2>
		<p>{{page.form.subtitle}}</p>
	</div>

			<form target="_blank" action="https://api.web3forms.com/submit" method="POST">
				<input type="hidden" name="access_key" value="17efea1b-d545-4649-a9c1-c5890aaf8b55">
				<input type="hidden" name="_subject" value="Nueva Adhesión Comercio">
				<input type="text" id="nombre" name="nombre" class="form-control" placeholder="Nombre" required>
				<input type="email" name="email" class="form-control" placeholder="Email" required>
				<input type="number" name="cellphone" class="form-control" placeholder="Celular (Cód. de área + número)" required>
				<input type="text" name="company" class="form-control" placeholder="Empresa" required>
				<input type="text" name="localidad" class="form-control" placeholder="Localidad" required>
				<input type="text" name="provincia" class="form-control" placeholder="Provincia" required>
				<input type="hidden" name="_next" value="https://directo.netlify.app/internas/gracias-contacto.html">
				<input type="hidden" name="_captcha" value="false">
				<button type="submit" class="btn btn_large btnBlue btnContacto">Enviar</button>
			</form>
</section>