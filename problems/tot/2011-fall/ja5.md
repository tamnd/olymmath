---
tag: GBV9WNQJ5V
kind: problem
appearances:
  - at: tot/2011-fall/ja5
    primary: true
  - at: tot/2011-fall/sa2
canonical:
  statement: S2
  rule: official-original
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 116389
    url: https://problems.ru/view_problem_details_new.php?id=116389
    origin: H2
    zone: Z3
    kind: transcription
  - id: S2
    lang: ru
    source: turgor
    name: Tournament of Towns 2011-fall official paper
    url: https://turgor.ru/problems/33/os33sl-avt.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftohtml (om-rutex/1)
    confidence: 0.9
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=68962
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Известно, что $0 < a,b,c,d < 1$ и $abcd = (1 - a)(1 - b)(1 - c)(1 - d)$. Докажите, что $(a + b + c + d) - (a + c)(b + d) \ge 1$.
