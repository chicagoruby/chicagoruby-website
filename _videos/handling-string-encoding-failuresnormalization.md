---
title: Handling String Encoding Failures/Normalizat­­­i­­on
date: 2015-11-03 00:00:00 Z
vimeo_id: 144897153
event: 'ChicagoRuby Downtown '
teaser: There are *a lot* of gotchas in working with strings and the possible exceptions
  they may raise.
speaker: Benjamin Fleischer
speaker_bio: Benjamin Fleischer has been a developer since 2010 and is quite active
  in the open-source software community. In addition to maintaining and collaborating
  on SimpleCov, AcitveModelSerializers, Mail, RMagick, rack-utf8_sanitizer, Acts-As-Taggable-On,
  and RubyFriends.com, he has contributed to Passenger, Kaminari, RubyGems, Homebrew,
  Bcrypt-ruby, CodeClimate test-reporter, Rack, and Rails.
---

Ruby 1.9 and better is encoding-aware. It has a representation of the external encoding and an internal encoding that it uses to process input and output. Each file has an encoding. The most common place we encounter encodings is when we read in, write, or otherwise manipulate strings. There are *a lot* of gotchas in working with strings and the possible exceptions they may raise. Learn how to use string encodings and how to handle any encoding issues as you follow my journey from just installing `rack-utf8_sanitizer` through writing comprehensive (passing) tests around RSpec's EncodedString. Works on Windows, too!
