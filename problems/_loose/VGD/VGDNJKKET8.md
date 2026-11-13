---
tag: VGDNJKKET8
kind: problem
type: answer
answer: '{(43n, 43m-1), (43n-42, 43m), (43n-6, 43m-7), (43n+7-43, 43m+6-43) | n, m ∈ Z_{≥ 1}}'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0000.parquet#row=245
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all pairs of positive integers $(a, b)$ such that $a^p - b^p - 1$ is divisible by $43$ for every prime $p \ge 5$.
