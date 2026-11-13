---
tag: 57H8BMSR71
kind: problem
appearances:
  - at: pumac/2013/fb3
    primary: true
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2013 official paper
    url: https://pumac.princeton.edu/s/PUMaC2013_FinalsB.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
    extraction: native/pdftotext@26.10.0 (claude-opus-5-5)
    confidence: 0.95
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212130
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the smallest positive integer $n$ with the following property: for every sequence of positive integers $a_1,a_2,\ldots,a_n$ with $a_1+a_2+\ldots+a_n=2013$, there exist some (possibly one) consecutive term(s) in the sequence that add up to 70.
