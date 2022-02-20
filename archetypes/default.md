---
{{ if eq  .Page.File.BaseFileName "_index" -}}
title: {{ .Section | title }}
menu:
  main:
    weight: 1
    identifier: {{ .Section }}
---
{{- else -}}
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true
description: 
tags:
from: normal archetype in themes/helios
---

This is the default.md file from the theme
<!--more-->
and there is more
{{ printf "%#+v" .Page.File.BaseFileName }}

{{ end }}
