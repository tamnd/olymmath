---
tag: RTY2B29VHE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=113
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sa-samc/2012
    source: hf-mathnet
    label: Saudi Arabia Saudi Arabia Mathematical Competitions 2012
---
For any positive integer $k$ define
$$
H_k = 1 + \frac{1}{2} + \dots + \frac{1}{k}.
$$
Prove the relation
$$
1 + \frac{1}{n+1} \sum_{k=1}^{n} H_k = H_{n+1}.
$$
