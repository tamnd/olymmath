---
tag: 820FHNARX0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=121463
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Represent the positive integer $n$ as the sum of some positive integers $a_{1}, a_{2}, \cdots, a_{p}$, i.e., $n=a_{1}+a_{2}+\cdots+a_{p}$, where $a_{1} \leqslant a_{2} \leqslant \cdots \leqslant a_{p}$. Let $f(n)$ be the number of such representations (for example, $4=4, 4=1+3, 4=2+2, 4=1+1+2, 4=1+1+1+1$, so $f(4)=5$). Prove: For any $n \geqslant 1, f(n+1) \leqslant \frac{1}{2}[f(n)+f(n+2)]$.
