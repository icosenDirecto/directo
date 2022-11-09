---
title: Blog
date: 2022-11-09 22:22:00 Z
layout: legales
---

<section>

<div>

  {% for post in site.posts %}
    <div>
        <img src="{{page.hero.image}}" alt="">
        <a href="{{ post.url }}">{{ post.title }}</a>
        {{ post.excerpt }}
    </div>  
  {% endfor %}

</div>

</section>