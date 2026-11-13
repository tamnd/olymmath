---
tag: XPBTS8EHXW
kind: problem
appearances:
  - at: pumac/2007/aa4
    primary: true
  - at: pumac/2007/ab9
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2007 official paper
    url: https://pumac.princeton.edu/s/PUMaC2007_AlgebraA.pdf
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
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=177351
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the all values of $a$ such that $x^6-6x^5+12x^4+ax^3+12x^2-6x+1$ is nonnegative for all real $x$.
