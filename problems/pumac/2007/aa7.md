---
tag: DKZKR1Q38D
kind: problem
appearances:
  - at: pumac/2007/aa7
    primary: true
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
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=262997
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given two sequences $x_n$ and $y_n$ defined by $x_0=y_0=7$,
$$x_n=4x_{n-1}+3y_{n-1},\quad\text{and}\quad y_n=3y_{n-1}+2x_{n-1},$$
Find $\lim_{n\to\infty}\frac{x_n}{y_n}$.
