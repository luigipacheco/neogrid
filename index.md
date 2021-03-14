---
layout: default
---
<section>
<div class="loading">
    Loading...
</div>
<div class="grid grid-1">{% for post in site.posts %}
      <a class="item" href="{{ site.url }}{{ post.url }}">
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