---
tag: T3P63Y00N6
kind: problem
appearances:
  - at: pumac/2007/aa6
    primary: true
canonical:
  statement: S2
  rule: derived
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
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2007 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h505953
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73074
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=262996
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If $a, b, c, d$ are reals with $a \ge b \ge c \ge d \ge 0$ and $b(b-a)+c(c-b)+d(d-c) \le 2 - \frac{a^2}{2}$ , find the minimum value of the expression
\begin{align*}\frac{1}{b+2006c-2006d}+\frac{1}{a+2006b-2006c-d} + \frac{1}{2007a-2006b-c+d} + \frac{1}{a-b+c+2006d}.\end{align*}
