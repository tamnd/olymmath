---
tag: 8ZXPC673JC
kind: problem
appearances:
  - at: tot/2012-spring/sa3
    primary: true
canonical:
  statement: S2
  rule: official-original
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 116726
    url: https://problems.ru/view_problem_details_new.php?id=116726
    origin: H2
    zone: Z3
    kind: transcription
  - id: S2
    lang: ru
    source: turgor
    name: Tournament of Towns 2012-spring official paper
    url: https://turgor.ru/problems/33/vs33sl-avt.pdf
    page: 2
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftotext (claude-opus-5-5)
    confidence: 0.9
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=71838
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Докажите, что для любого натурального $n$ существуют такие целые числа $a_1, a_2, \ldots, a_n$, что при всех целых $x$ число $(\ldots((x^2+a_1)^2+a_2)^2+\ldots+a_{n-1})^2+a_n$ делится на $2n-1$.
