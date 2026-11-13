---
tag: 85HD1GVH2X
kind: problem
type: answer
answer: p(x) = x + c (x - r_1)(x - r_2) \cdots (x - r_k)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220455
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For all $n>1$. Find all polynomials with complex coefficient and degree more than one such that $(p(x)-x)^2$ divides $p^n(x)-x$. ($p^0(x)=x , p^i(x)=p(p^{i-1}(x))$)

*Proposed by Navid Safaie*
