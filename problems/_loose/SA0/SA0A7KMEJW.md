---
tag: SA0A7KMEJW
kind: problem
type: answer
answer: "16"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205134
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the number of pairs of positive integers $(a, p)$ such that:

- $p$ is a prime greater than $2.$

- $1 \le a \le 2024.$

- $a< p^4.$

- $ap^4 + 2p^3 + 2p^2 + 1$ is a perfect square.
