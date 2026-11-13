---
tag: 2CSXDNK7AF
kind: problem
appearances:
  - at: pumac/2010/ab7
    primary: true
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2010 official paper
    url: https://pumac.princeton.edu/s/PUMaC2010_AlgebraB.pdf
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
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207598
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f$ be a function such that $f(x)+f(x+1)=2^x$ and $f(0)=2010$. Find the last two digits of $f(2010)$.
