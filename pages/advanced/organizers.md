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

  <p>In addition to our monthly events, ChicagoRuby produces multiple annual
    conferences. <a href="https://windycityrails.com">WindyCityRails</a>,
    Chicago’s Ruby on Rails conference, started in 2008 to fill what had been a
    void of Ruby conferences in the midwest. In 2015, ChicagoRuby produced the
    inaugural <a href="https://windycitythings.com">WindyCityThings</a>, a
    conference focused on the Internet of Things (IoT). We’re also currently in
    the planning stages for <a href="http://rubycaribe.com">RubyCaribe</a>, a
    Ruby conference with deep-dive lab session in Barbados.</p>
</section>
