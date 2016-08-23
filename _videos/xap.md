---
title: Disk Images as Build Artifacts
date: 2015-05-05 00:00:00 Z
vimeo_id: 126994102
event: 'ChicagoRuby Downtown '
teaser: Deployment can be a fraught experience. Even fully-automated, provisioning
  and configuring live environments can leave you exposed in a number of ways.
speaker: Chris Kozak
speaker_bio: Chris Kozak is a lead consultant at ThoughtWorks. He has worked across
  a wide variety of industries in a number of capacities including development, operations,
  quality assurance, and architecture.
---

Deployment can be a fraught experience. Even fully-automated, provisioning and configuring live environments can leave you exposed in a number of ways. Consider: • When a release goes wrong, how much time and effort does it take to roll-back to a previous release? • When things go right, how much down-time is incurred by provisioning? • What if somebody has manually modified the machine and the script’s assumptions about it are incorrect? • Under heavy load, how long would it take to spin-up more machines? What if one of them fails to provision properly? • If the build script fails mid-provision, can it be cleanly re-run? If so, how much effort was expended to ensure that it could be? Using disk images as build artifacts allows us to decouple provisioning from deployment, mitigating many of these risks. In this talk, Chris Kozak will use Packer to demonstrate this approach. He will provision a machine, snapshot the disk, and discard the machine. If image generation is successful, the deployment process is reduced to rebooting the live environment with the new image. If it fails, it does not impact the live environment.
