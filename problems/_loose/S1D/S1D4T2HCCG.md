---
tag: S1D4T2HCCG
kind: problem
type: answer
answer: a_{n}=\frac{2+\sqrt{3}}{2\sqrt{3}}(1+\sqrt{3})^{n}+\frac{\sqrt{3}-2}{2\sqrt{3}}(1-\sqrt{3})^{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=130686
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the sequence $\left\{a_{n}\right\}$ satisfy $a_{1}=3, a_{2}=8, a_{n+2}=2 a_{n+1}+2 a_{n}, n=1,2, \cdots$. Find the general term $a_{n}$ of the sequence $\left\{a_{n}\right\}$.
