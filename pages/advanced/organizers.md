---
title: Organizers
permalink: "/organizers/"
---

<section class="section-about section-about-history">
<h1>Organizer Alumni</h1>
<p>The ChicagoRuby organizers work hard to deliver multiple meetups every month of the year. Thank you organizers! ChicagoRuby is made possible thanks to the hard work of our volunteer organizers!</p>
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
</section>

<section class="section-about-conferences">
  <h1>Annual Conferences</h1>

  <p>In addition to our monthly events, ChicagoRuby has produced conferences in multiple technical areas, including NoSQL databases, mobile, and IoT. Our longest running conference, <a href="https://windycityrails.com">WindyCityRails</a>, was launched in 2008 to fill what had been a void of Ruby conferences in the midwest.</p>
</section>
