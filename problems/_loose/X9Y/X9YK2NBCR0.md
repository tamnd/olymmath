---
tag: X9YK2NBCR0
kind: problem
type: answer
answer: \frac{1}{n}C_{2n-2}^{n-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=99983
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A$ denote the set of integer solutions $\left(x_{1}, x_{2}, \cdots, x_{2 n}\right)$ to the equation $x_{1}+x_{2}+\cdots+x_{2 n}=n$ that satisfy the constraints: $x_{1}+x_{2}+\cdots+x_{j}<\frac{1}{2} j(1 \leqslant j \leqslant 2 n-1)$ and $0 \leqslant x_{j} \leqslant 1(1 \leqslant j \leqslant 2 n)$. Find $|A|$.
