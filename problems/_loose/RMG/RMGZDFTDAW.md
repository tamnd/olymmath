---
tag: RMGZDFTDAW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0000.parquet#row=206
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
If $A = \{a_1, a_2, \dots, a_n\} \subset \mathbb{N}$ then let denote $A^* = \{a_i + a_j \mid 1 \le i < j \le n\}$ (where $A^*$ is a multiset). For instance: if $A = \{1, 2, 3, 4\}$ then $A^* = \{3, 4, 5, 5, 6, 7\}$. Prove that if $A \neq B$ and $A^* = B^*$ then $|A| = |B| = 2^k$.
