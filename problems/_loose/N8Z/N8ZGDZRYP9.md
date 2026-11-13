---
tag: N8ZGDZRYP9
kind: problem
type: answer
answer: All pairs with equal entries (p, p) for any positive integer p, together with (2, 1) and (1, 2).
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/France/train/0001.parquet#row=47
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Trouver tous les entiers strictement positifs $p, q$ tels que
$$
p 2^{q} = q 2^{p}.
$$
