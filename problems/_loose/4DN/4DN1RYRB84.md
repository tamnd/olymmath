---
tag: 4DN1RYRB84
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=130017
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \in \mathbf{N}, x_{0}=0, x_{i}>0, i=1,2, \cdots, n$, and $\sum_{i=1}^{n} x_{i}=1$. Prove:
$$
1 \leqslant \sum_{i=1}^{n} \frac{x_{i}}{\sqrt{1+x_{0}+x_{1}+\cdots+x_{i-1}} \sqrt{x_{i}+\cdots+x_{n}}}<\frac{n}{2}
$$
