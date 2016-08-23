---
title: Organizers
permalink: "/organizers/"
position: 2
---

# Organizer Alumni

ChicagoRuby is made possible thanks to the hard work of our volunteer organizers!

{% for organizer in site.data.organizers["past"] %}
- [{{ organizer.name }}]({{ organizer.link }})
{% endfor %}
