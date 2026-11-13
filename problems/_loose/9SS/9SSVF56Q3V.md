---
tag: 9SSVF56Q3V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Vietnam/train/0000.parquet#row=143
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: vn-vmo
    source: hf-mathnet
    label: Vietnam Vietnamese Mathematical Competitions
---
Let be given a sequence $(u_n)$ defined by
$$
u_1 = 1, u_2 = 11, u_{n+2} = u_{n+1} + 5u_n, \forall n \in \mathbb{Z}^+.$$
Prove that $u_n$ is not a perfect square for all $n > 3$.
