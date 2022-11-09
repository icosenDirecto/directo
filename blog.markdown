---
title: Blog
date: 2022-11-09 22:22:00 Z
layout: legales
---

<section>

<div class="blog">

  {% for post in site.posts %}
    <div>
        <img src="{{post.hero.image}}" alt="">
        <a href="{{ post.url }}">
            <p class="blogTitle">{{ post.title }}<p>
        </a>
        <p>{{ post.excerpt }}</p>
    </div>  
  {% endfor %}

</div>

</section>