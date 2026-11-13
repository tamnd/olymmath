---
tag: 9Z2ABCYHP4
kind: problem
type: answer
answer: F(k)=\frac{1}{\sqrt{5}}(\frac{3+\sqrt{5}}{2})^{k+1}-\frac{1}{\sqrt{5}}(\frac{3-\sqrt{5}}{2})^{k+1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=114611
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\alpha=\frac{3-\sqrt{5}}{2}, f(n)=[\alpha n], f^{(k)}=f \cdot f \cdots \cdots \cdot f$ be the $k$-th composition of $f$, find the expression for $F(k)$.
