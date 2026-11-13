---
tag: SBPZ57TYGH
kind: problem
appearances:
  - at: pumac/2012/fa2
    primary: true
canonical:
  statement: S1
  rule: official-original
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2012 official paper
    url: https://pumac.princeton.edu/s/PUMaC2012_FinalsA.pdf
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
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210618
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a,b,c$ be real numbers such that $a+b+c=abc$. Prove that $\frac{1}{a^2+1}+\frac{1}{b^2+1}+\frac{1}{c^2+1}\ge\frac{3}{4}$.
