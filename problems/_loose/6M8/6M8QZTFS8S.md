---
tag: 6M8QZTFS8S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2002 Mongolian Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2521347
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=48630
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=244543
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo/2002
    source: hf-ai-mo-aops
    label: 2002 Mongolian Mathematical Olympiad
---
Prove that for each $n\in\mathbb N$ the polynomial $(x^2+x)^{2^n}+1$ is irreducible over the polynomials with integer coefficients.
