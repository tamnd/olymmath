---
tag: HDP2CA1VCA
kind: problem
appearances:
  - at: tot/2016-spring/sa3
    primary: true
canonical:
  statement: S2
  rule: official-original
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 65734
    url: https://problems.ru/view_problem_details_new.php?id=65734
    origin: H2
    zone: Z3
    kind: transcription
  - id: S2
    lang: ru
    source: turgor
    name: Tournament of Towns 2016-spring official paper
    url: https://turgor.ru/problems/37/vs-37-sl-avt.pdf
    page: 2
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftohtml (om-rutex/1)
    confidence: 0.9
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=61142
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Пусть $M$ — середина основания $AC$ равнобедренного треугольника $ABC$. На сторонах $AB$ и $BC$ отмечены соответственно точки $E$ и $F$ так, что $AE \ne CF$ и $\angle FMC = \angle MEF = \alpha$. Найдите $\angle AEM$.
