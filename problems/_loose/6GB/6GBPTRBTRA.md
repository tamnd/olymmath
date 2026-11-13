---
tag: 6GBPTRBTRA
kind: problem
type: answer
answer: a_{n}=\frac{1}{2}(P_{0}^{2^{n}}+Q_{0}^{2^{n}})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=167027
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In an infinite sequence, $a_{0}=c$ and

$$
a_{n}=2\left(a_{n-1}-1\right)^{2} n=1,2, \ldots
$$

Determine $a_{n}$ as a function of $c$ and $n$.
