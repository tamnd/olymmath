---
tag: 6DTZ95N5XH
kind: problem
appearances:
  - at: pumac/2011/aa1
    primary: true
  - at: pumac/2011/ab5
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2011 official paper
    url: https://pumac.princeton.edu/s/PUMaC2011_AlgebraA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1920813
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=7016
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209145
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A polynomial $p$ can be written as
\begin{align*}
p(x) = x^6+3x^5-3x^4+ax^3+bx^2+cx+d.
\end{align*}
Given that all roots of $p(x)$ are equal to either $m$ or $n$ where $m$ and $n$ are integers, compute $p(2)$ .
