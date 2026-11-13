---
tag: T1SFWRW0X3
kind: problem
type: answer
answer: (n+1)^{k}-(n+1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=165248
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the closed form (as a function of $k$ and $n$) of the following series sum:

$$
\binom{k}{1} \sum_{i=1}^{n} i+\binom{k}{2} \sum_{i=1}^{n} i^{2}+\ldots+\binom{k}{k-1} \sum_{i=1}^{n} i^{k-1}
$$
