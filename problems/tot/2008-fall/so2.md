---
tag: 710TWWFBT4
kind: problem
appearances:
  - at: tot/2008-fall/so2
    primary: true
canonical:
  statement: S2
  rule: official-original
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 111649
    url: https://problems.ru/view_problem_details_new.php?id=111649
    origin: H2
    zone: Z3
    kind: transcription
  - id: S2
    lang: ru
    source: turgor
    name: Tournament of Towns 2008-fall official page
    url: https://turgor.ru/problems/30/index.php
    origin: H1
    zone: Z2
    kind: official
    extraction: native/html (claude-opus-5-5)
    confidence: 0.9
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=177182
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Решите систему уравнений ($n>2$)
$$\sqrt{x_1}+\sqrt{x_2+\ldots+x_n}=\sqrt{x_2}+\sqrt{x_3+\ldots+x_n+x_1}=\ldots=\sqrt{x_n}+\sqrt{x_1+\ldots+x_{n-1}},$$
$$x_1-x_2=1.$$
