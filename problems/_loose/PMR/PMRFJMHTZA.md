---
tag: PMRFJMHTZA
kind: problem
type: answer
answer: n \left\lfloor nx \right\rfloor
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205470
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer and $x$ positive real number such that none of numbers $x,2x,\dots,nx$ and none of $\frac{1}{x},\frac{2}{x},\dots,\frac{\left\lfloor nx\right\rfloor }{x}$ is an integer. Prove that $$
\left\lfloor x\right\rfloor +\left\lfloor 2x\right\rfloor +\dots+\left\lfloor nx\right\rfloor +\left\lfloor \frac{1}{x}\right\rfloor +\left\lfloor \frac{2}{x}\right\rfloor +\dots+\left\lfloor \frac{\left\lfloor nx\right\rfloor }{x}\right\rfloor =n\left\lfloor nx\right\rfloor $$
