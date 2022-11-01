---
title: GiftCard
date: 2022-10-28 12:45:00 Z
---

<section>
			<div class="main-container moduleHeaderEspecial">
				<div>
					<img src="/assets/48.png" alt="">
				</div>
				<div class="">
					<div>
						<div>
							<h1>Ganate una GiftCard por $10.000</h1>
							<p>Registrate en <a href="https://mi.directo.com.ar/Cuenta/Registro?utm_source=Sorteo&utm_medium=Landing&utm_campaign=SorteoRegistro&utm_id=Landing_Sorteo" class="linkDestacado">mi.directo.com.ar</a> y ya estás participando.<br>
								Así de simple. Así de Directo.
							</p>
						</div>
						<div>
							<button class="btn btn_large btnGreen btn-green__hover">
								<a href="https://mi.directo.com.ar/Cuenta/Registro?utm_source=Sorteo&utm_medium=SorteoUltimaCuota"
									target="_self">Quiero ganarme la GiftCard</a>
							</button>
						</div>
					</div>
					<div class="moduleDetalle">
						<ul class="listLegales">
							<li>
								<a href="#basesycondiciones"><i class="fa-solid fa-angle-down"></i> Ver bases y condiciones</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>

<section id="basesycondiciones">
    <div class="main-container moduleLegales">
    {% assign legales = site.legales | where: "categories","giftcard" %}
        {% for legal in legales %}
            <h2>{{ legal.title }}</h2>
            <p>{{ legal.content | markdownify }}</p> 
        {% endfor %}
    </div>
</section>