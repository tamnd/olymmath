---
tag: RN9RS0SA8G
kind: problem
type: answer
answer: (n+1)^2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=169689
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Show that if $a_{1}, a_{2}, \ldots, a_{n}$ are positive real numbers, then

$$
\prod_{k=1}^{n}\left(1+\frac{1}{a_{k}}\right)\left(1+\frac{a_{k}}{k^{2}}\right) \geq(n+1)^{2}
$$
