---
tag: QC4Y3SGGZG
kind: problem
appearances:
  - at: pumac/2008/na2
    primary: true
  - at: pumac/2008/nb3
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2008 official paper
    url: https://pumac.princeton.edu/s/PUMaC2008_NumberTheoryA.pdf
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
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263098
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all integral solutions to $x^y-y^x=1$.
