---
tag: 9T32BCDNS8
kind: problem
appearances:
  - at: pumac/2007/na7
    primary: true
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2007 official paper
    url: https://pumac.princeton.edu/s/PUMaC2007_NumberTheoryA.pdf
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
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263027
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
How many ordered pairs of integers $(x,y)$ satisfy
$$8(x^3+x^2y+xy^2+y^3)=15(x^2+y^2+xy+1)?$$
