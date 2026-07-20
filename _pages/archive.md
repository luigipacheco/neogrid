---
layout: post
title: Archive
permalink: /archive/
---
# Archive

Earlier projects and experiments, kept for the record.

<ul>
{% assign archived_posts = site.posts | where: "archived", true %}
{% for post in archived_posts %}
  <li><a href="{{ post.url | relative_url }}">{{ post.title }}</a> — {{ post.date | date: "%Y" }}</li>
{% endfor %}
</ul>
