---
tag: TEPVWE9QRM
kind: problem
type: answer
answer: \frac{n}{2n-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=116090
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{i} \in \mathrm{R}^{+},(i=1,2, \cdots, n)$, and $\sum_{i=1}^{n} a_{i}=1$, find
$$
S=\frac{a_{1}}{1+a_{2}+\cdots+a_{n}}+\frac{a_{2}}{1+a_{1}+a_{3}+\cdots+a_{n}}+\cdots+\frac{a_{n}}{1+a_{1}+\cdots+a_{n-1}} \text { 's }
$$
minimum value.
