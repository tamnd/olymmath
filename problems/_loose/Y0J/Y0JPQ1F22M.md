---
tag: Y0JPQ1F22M
kind: problem
type: answer
answer: f(x) = 0
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242207
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ f(x),\ g(x)$ be continuous functions defined in the range of $ 0\leq x\leq 1$.

(1) Find $ f(x)$ such that $ f(x)=\int_0^1 e^{x+t}f(t)\ dt$.

(2) Find $ g(x)$ such that $ g(x)=\int_0^1 e^{x+t}g(t)\ dt+x$.
