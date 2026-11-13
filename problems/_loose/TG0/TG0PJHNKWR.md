---
tag: TG0PJHNKWR
kind: problem
type: answer
answer: -n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=166123
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Solve the following equation, where $n \geq 2$ is a given natural number and $x$ is the unknown.

$$
\sum_{i=0}^{n-2} \frac{1}{(x+i)(x+i+1)}=x(x+1)(x+2) \cdot \ldots \cdot(x+n)+\frac{n-1}{x(x+n-1)}
$$
