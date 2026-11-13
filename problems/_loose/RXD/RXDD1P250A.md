---
tag: RXDD1P250A
kind: problem
type: answer
answer: \frac{4^{n}+2}{3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=101793
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For positive integers $k, g(k)$ represents the greatest odd divisor of $k$ (for example, $g(3)=3, g(20)=5$), find $g(1)+g(2)+$ $g(3)+\cdots+g\left(2^{n}\right)$ (where $n \in \mathbf{N}^{+}$).
