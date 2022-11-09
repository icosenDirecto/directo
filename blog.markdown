---
title: Blog
date: 2022-11-09 22:22:00 Z
layout: legales
---

<div>
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
</div>