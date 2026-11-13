---
tag: MG5NEVF5RX
kind: problem
type: answer
answer: a_n = \frac{n}{2^n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247073
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the sequence $(a_n)_{n\geqslant 1}$ defined by $a_1=1/2$ and $2n\cdot a_{n+1}=(n+1)a_n.$

- Determine the general formula for $a_n.$

- Let $b_n=a_1+a_2+\cdots+a_n.$ Prove that $\{b_n\}-\{b_{n+1}\}\neq \{b_{n+1}\}-\{b_{n+2}\}.$
