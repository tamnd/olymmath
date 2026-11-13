---
tag: Z1P8YFJB55
kind: problem
type: answer
answer: 2\sqrt{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=82080
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \geqslant 3$ and $a_{1}, \ldots, a_{n}$ be real numbers such that $\sum a_{i}^{2}=1$. Determine the maximum value that

$$
\sum_{i=2}^{n+1}\left|a_{i}-a_{i-1}\right|
$$

can take.
