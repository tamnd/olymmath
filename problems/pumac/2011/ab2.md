---
tag: 64R2E4Y66E
kind: problem
appearances:
  - at: pumac/2011/ab2
    primary: true
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2011 official paper
    url: https://pumac.princeton.edu/s/PUMaC2011_AlgebraB.pdf
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
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209154
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If $a$ and $b$ are the roots of $x^2-2x+5$, what is $|a^8+b^8|$?
