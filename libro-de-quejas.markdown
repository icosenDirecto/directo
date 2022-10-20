---
title: Libro de quejas
date: 2022-10-17 14:32:00 Z
categoria: legales
hero:
  image: "/uploads/libro-de-quejas.png"
link:
  web: "/gracias-contacto.html"
layout: legales
---

<section class="legales">
			<div class="main-container module">
				<div class="formImage">
					<img src="{{page.hero.image}}" alt="">
				</div>

				<form method="POST" id="form">
					<input type="hidden" name="access_key" value="fe0789d7-2670-44f9-a9e4-381b13c0e2e9">
					<div class="formFlex">
						<input type="hidden" name="subject" value="Nueva Sugerencia :: Libro de quejas">
						<input type="checkbox" name="botcheck" id="" style="display: none;">
						<input type="hidden" name="redirect" value="{{page.link.web}}">
						<input type="hidden" name="from_name" value="Libro de quejas">
						<input type="text" name="nombre-apellido" class="form-control" placeholder="Nombre y Apellido [6]" required>
						<input type="email" name="email" class="form-control" placeholder="Email" required>
						<input type="number" name="cellphone" class="form-control" placeholder="Celular (Cód. de área + número)" required>
						<textarea name="mensaje" id="" cols="30" rows="10" class="form-control" placeholder="Mensaje"></textarea>
						<button type="submit" class="btn btn_large btnBlue btnContacto">Enviar</button>
						<div id="result"></div>
					</div>
				</form>
		    </div>
</section>