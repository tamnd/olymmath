---
tag: KN84D5MGEW
kind: problem
type: answer
answer: \frac{3}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91042
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a, b$ and $c$ be natural numbers. Find the smallest value that the following expression can take:

$$
\frac{a}{\operatorname{ggT}(a+b, a-c)}+\frac{b}{\operatorname{ggT}(b+c, b-a)}+\frac{c}{\operatorname{ggT}(c+a, c-b)}
$$
