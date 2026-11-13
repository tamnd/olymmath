---
tag: XEDACTPCCG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0000.parquet#row=161
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo
    source: hf-mathnet
    label: Mongolia ММО-48
---
a sequence $a_0, a_1, \dots$ is defined by $a_0 = 1$ and for $k \ge 1$, $a_{2k} = (-1)^k a_k$; for $k \ge 0$, $a_{2k+1} = -a_k$. Prove that for every $n \ge 0$, $a_0 + a_1 + \dots + a_n \ge 0$.
