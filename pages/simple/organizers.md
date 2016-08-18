---
title: Organizers
permalink: /organizers/
---

# Organizer Alumni

ChicagoRuby is made possible thanks to the hard work of our volunteer organizers!

{% for organizer in site.data.organizers["past"] %}
- [{{ organizer.name }}]({{ organizer.link }})
{% endfor %}
