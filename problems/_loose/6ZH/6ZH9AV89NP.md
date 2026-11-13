---
tag: 6ZH9AV89NP
kind: problem
type: answer
answer: (a, b, c) = (1/2, 1/3, 1/6) and (a, b, c) being any permutation of (1, 1, -1).
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0001.parquet#row=197
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all triples $(a, b, c)$ of real numbers satisfying
$$
a + b + c = 1 \text{and} 3(a + bc) = 4(b + ca) = 5(c + ab).
$$
