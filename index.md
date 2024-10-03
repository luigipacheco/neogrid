---
layout: default
---
<section>
<div class="loading">
    Loading...
</div>
<div class="filter-buttons">
  <button class="filter-button" data-category="all">All</button>
  <button class="filter-button" data-category="digifab">Fabrication</button>
  <button class="filter-button" data-category="robotics">Robotics</button>
  <button class="filter-button" data-category="design">Design</button>
</div>
<div class="grid grid-1">{% for post in site.posts %}
      <a class="item project" data-category="{{ post.categories | join: ' ' }}" href="{{ site.url }}{{ post.url }}">
        <div class="item-content">
          <div class="container">
              <img src="{{ post.thumbnail }}" alt="{{ post.title }}" class="image" style="width:100%">
              <div class="middlev">
              <div class="text vertical">{{ post.caption }}</div>
            </div>
          </div>
        </div>
      </a>{% endfor %}  
    </div>
    </section>