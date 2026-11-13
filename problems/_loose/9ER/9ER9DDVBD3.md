---
tag: 9ER9DDVBD3
kind: problem
type: answer
answer: f(n) = 3n + 1 for all positive integers n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0000.parquet#row=354
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all increasing functions $f: \mathbb{N}^* \to \mathbb{N}^*$ with the property: for every $n \in \mathbb{N}^*$, the number $\frac{1}{n} \sum_{k=1}^{n} k f(k)$ is a perfect square not larger than $(n+1)^2$.
