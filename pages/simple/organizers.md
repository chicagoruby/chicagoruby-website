---
title: Organizers
permalink: "/organizers/"
---

# Organizer Alumni

ChicagoRuby is made possible thanks to the hard work of our volunteer organizers!

<section class="section-about">
<h1>Organizer Alumni</h1>
  <ul>
    {% for organizer in site.data.organizers["past"] %}
    <li><a href="{{organizer.link}}">{{organizer.name}}</a></li>
    {% endfor %}
  </ul>
</section>

<section class="section-organizers">
  <h1>Current Organizers</h1>

  <ul>
    {% for organizer in site.data.organizers["current"] %}
    <li>
      <a href="{{ organizer.link }}">
        <figure>
          {% if organizer.photo %}
            <img src="/assets/organizers/{{ organizer.photo }}" alt="Photo of {{ organizer.name }}">
          {% else %}
            <img src="/assets/organizers/na.jpg" alt="Photo unavailable">
          {% endif %}
          <figcaption>{{ organizer.name }}</figcaption>
        </figure>
      </a>
    </li>
    {% endfor %}
  </ul>

  <p class="alumni"><a href="/organizers">Organizer Alumni</a></p>
</section>
