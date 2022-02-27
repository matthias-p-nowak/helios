---
{{ if eq  .Page.File.BaseFileName "_index" -}}
title: {{ .Section | title }}
date: {{ .Date }}
description:
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
---

This is the default.md file from the theme
<!--more-->
and there is more

{{ end }}
