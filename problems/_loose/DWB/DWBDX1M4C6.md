---
tag: DWBDX1M4C6
kind: problem
type: answer
answer: \frac{1}{6}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=103338
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the functions $f(x)=1-|1-2 x|$ and $g(x)=(x-1)^{2}$ defined on the interval $[0,1]$, and $F(x)=\left\{\begin{array}{l}g(x), \text { if } f(x) \geqslant g(x) ; \\ f(x) \text {, if } f(x)<g(x) .\end{array}\right.$ Find: (1) The analytical expression of $F(x)$; (2) The maximum value of $F(x)$; (3) Solve the equation $F(x)=\frac{1}{3}$.
