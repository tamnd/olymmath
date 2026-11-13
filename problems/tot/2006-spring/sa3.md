---
tag: NPBA0AAMAS
kind: problem
appearances:
  - at: tot/2006-spring/sa3
    primary: true
canonical:
  statement: S2
  rule: official-original
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 65854
    url: https://problems.ru/view_problem_details_new.php?id=65854
    origin: H2
    zone: Z3
    kind: transcription
  - id: S2
    lang: ru
    source: turgor
    name: Tournament of Towns 2006-spring official page
    url: https://turgor.ru/problems/27/index.php
    origin: H1
    zone: Z2
    kind: official
    extraction: native/html (om-rutex/1)
    confidence: 0.9
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=68505
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Дан многочлен $P(x) = x^4 + x^3 - 3x^2 + x + 2$. Докажите, что любая целая положительная степень этого многочлена имеет хотя бы один отрицательный коэффициент.
