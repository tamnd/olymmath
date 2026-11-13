---
tag: 3GAZXKZ75S
kind: problem
type: answer
answer: "25"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=106225
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that the number of $k$-partitions of a set $S(n, k)$ satisfies $S(n+1, k)=S(n, k-1)+ k S(n, k),(1 \leqslant k \leqslant n)$. Use this to calculate $S(5,3)$.
