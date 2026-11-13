---
tag: WRVBANR00K
kind: problem
type: answer
answer: "2000"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=112951
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Real numbers $x_{1}, x_{2}, \cdots, x_{2001}$ satisfy $\sum_{k=1}^{2000}\left|x_{k}-x_{k+1}\right|=2001$, let $y_{k}=\frac{1}{k}\left(x_{1}+x_{2}+\cdots+\right.$ $\left.x_{k}\right), k=1,2, \cdots, 2001$. Find the maximum possible value of $\sum_{k=1}^{2000} \mid y_{k}-y_{k+1}$ . (2001 Shanghai Competition Problem)
