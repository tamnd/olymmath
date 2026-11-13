---
tag: 9CRECVDBDH
kind: problem
type: answer
answer: (\frac{n+}{n-})^{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=96990
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $x_{i}>0(i=1,2, \cdots, n), a \in \mathbf{R}^{+}$ and $\sum_{i=1}^{n} x_{i}=s \leqslant a$. Prove that: $\prod_{i=1}^{n} \frac{a+x_{i}}{a-x_{i}} \geqslant\left(\frac{n a+s}{n a-s}\right)^{n}$.
