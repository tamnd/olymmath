---
tag: 50YATTC8BA
kind: problem
type: answer
answer: "90"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261534
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f(n) = \sum^n_{d=1} \left\lfloor \frac{n}{d} \right\rfloor$ and $g(n) = f(n) -f(n - 1)$. For how many $n$ from $1$ to $100$ inclusive is $g(n)$ even?
