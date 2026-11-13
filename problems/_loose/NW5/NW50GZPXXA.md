---
tag: NW50GZPXXA
kind: problem
type: answer
answer: x = n + 2022/n, where n is an integer with n ≥ 2023
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Turkey/train/0000.parquet#row=238
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For each real number $a$ let $\lfloor a \rfloor$ be the largest integer not exceeding $a$. Find all positive real numbers satisfying
$$
x \cdot \lfloor x \rfloor + 2022 = \lfloor x^2 \rfloor.
$$
