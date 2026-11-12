---
tag: K0TH5RSJXH
kind: problem
appearances:
  - at: tot/2008-spring/ja6
    primary: true
canonical:
  statement: S2
  rule: official-original
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 64609
    url: https://problems.ru/view_problem_details_new.php?id=64609
    origin: H2
    zone: Z3
    kind: transcription
  - id: S2
    lang: ru
    source: turgor
    name: Tournament of Towns 2008-spring official page
    url: https://turgor.ru/problems/29/index.php
    origin: H1
    zone: Z2
    kind: official
    extraction: native/html (om-rutex/1)
    confidence: 0.9
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=52637
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Существуют ли такие натуральные числа $a$, $b$, $c$, $d$, что $a/b + c/d = 1$, $a/d + c/b = 2008$ ?
