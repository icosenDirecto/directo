---
title: Botón de baja
date: 2022-10-20 18:22:00 Z
categoria: legales
layout: legales
---

<section class="legales">
			<div class="main-container module">
				<div class="formImage">
					<img src="{{page.hero.image}}" alt="">
				</div>

				<form method="POST" id="form">
					<input type="hidden" name="access_key" value="6036d195-225e-485b-80a9-a480ca3046ea">
					<div class="formFlex">
						<input type="hidden" name="access_key" value="6036d195-225e-485b-80a9-a480ca3046ea">
						<input type="hidden" name="_subject" value="Nueva Sugerencia :: Libro de quejas">
						<input type="hidden" name="_next" value="https://directo.netlify.app/internas/gracias-contacto.html">
						<input type="hidden" name="_captcha" value="false">
						<input type="text" name="nombre-apellido" class="form-control" placeholder="Nombre y Apellido"
							required>
						<input type="email" name="email" class="form-control" placeholder="Email" required>
						<input type="number" name="dni" class="form-control" placeholder="DNI" required>
						<input type="number" name="cellphone" class="form-control"
							placeholder="Celular (Cód. de área + número)" required>
						<div class="formCheckbox">
							<div class="formCheckboxText">
								<input type="checkbox" id="item1" name="prestamoconsumo" value="prestamoconsumo">
								<label for="item1"> Préstamo Consumo</label>
							</div>
						</div>
						<textarea name="mensaje" id="" cols="30" rows="10" class="form-control"
							placeholder="Mensaje"></textarea>
						<button type="submit" class="btn btn_large btnBlue btnContacto">Enviar</button>
					</div>
				</form>
			</div>
</section>
