---
title: "{{ replace .Name "-" " " | title }}"
name: {{ .Name }}
htmlpagetitle: "{{ replace .Name "-" " " | title }}"
description: {{ .Name }} - Websites from £350. Web design in Hastings East Sussex.
draft: true
type: page
layout: inner
bundle: {{ .Name }}/bundle
---