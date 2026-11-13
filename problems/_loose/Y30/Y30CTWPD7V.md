---
tag: Y30CTWPD7V
kind: problem
type: answer
answer: 2, 3, 5
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250868
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A positive integer $k > 1$ is called nice if for any pair $(m, n)$ of positive integers satisfying the condition $kn + m | km + n$ we have $n | m$.
1. Prove that $5$ is a nice number.
2. Find all the nice numbers.
