---
tag: Q19TBM48WH
kind: problem
type: answer
answer: All m except 4 (i.e., m = 3 and all m ≥ 5).
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Baltic_Way/train/0001.parquet#row=213
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: baltic-way-sl
    source: hf-mathnet
    label: Baltic Way Baltic Way shortlist
---
Consider $m \ge 3$ positive real numbers $g_1, \dots, g_m$, each number being less than the sum of the others. For any subset $M \subseteq \{1, \dots, m\}$, denote
$$
S_M = \sum_{k \in M} g_k.
$$
Find all $m$ for which it is always possible to partition the indices $1, \dots, m$ into three sets $A, B, C$, with the property that
$$
S_A < S_B + S_C, S_B < S_A + S_C \text{and} S_C < S_A + S_B.
$$
