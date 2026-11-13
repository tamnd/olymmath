---
tag: QWRXCJGH27
kind: problem
type: answer
answer: 48!/32!*16!*17!
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0000.parquet#row=183
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo
    source: hf-mathnet
    label: Mongolia Mongolian Mathematical Olympiad
---
a_1, a_2, ..., a_{49} is a permutation of the set $\{2, 3, ..., 50\}$. Denote $S_1 = a_1$, $S_2 = a_1 + a_2$, ..., $S_{49} = a_1 + a_2 + ... + a_{49}$. Find the number of different sequences $S_1, S_2, ..., S_{49}$ in which no one of $S_i$ is divisible by $3$.
