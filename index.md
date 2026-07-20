---
layout: default
---
<section>
  <div class="filter-buttons" role="group" aria-label="Filter projects">
    <button class="filter-button is-active" data-category="all">All</button>
    <button class="filter-button" data-category="digifab">Fabrication</button>
    <button class="filter-button" data-category="robotics">Robotics</button>
    <button class="filter-button" data-category="design">Design</button>
  </div>
  <div class="project-grid">
    {%- assign visible_posts = site.posts | where_exp: "p", "p.archived != true" -%}
    {%- for post in visible_posts -%}
    <a class="project-card" data-category="{{ post.categories | join: ' ' }}" href="{{ post.url | relative_url }}">
      <img src="{{ post.thumbnail | prepend: '/' | relative_url }}" alt="{{ post.title }}" loading="lazy">
      <span class="project-caption">{{ post.caption | default: post.title }}</span>
    </a>
    {%- endfor -%}
  </div>
</section>
