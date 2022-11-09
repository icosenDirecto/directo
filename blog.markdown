---
title: Blog
date: 2022-11-09 22:22:00 Z
layout: legales
---

<section>

<div class="blog">
  {% for post in site.posts %}
        <img src="{{post.hero.image}}" alt="">
        <p class="blogTitle"><a href="{{ post.url }}">{{ post.title }}</a></p>
        <p>{{ post.excerpt }}</p>  
  {% endfor %}
</div>

</section>