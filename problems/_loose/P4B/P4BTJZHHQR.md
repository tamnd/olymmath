---
tag: P4BTJZHHQR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Belarus/train/0001.parquet#row=261
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Call the set $\{a_1, a_2, \dots, a_n\}$ of positive integers good if
$$
\gcd(a_k, \sum_{i \neq k} a_i) > 1
$$
for each $k = \overline{1, n}$.
Prove that for each $c \in (0, 1)$ there exists a positive integer $M$ such that for any positive integer $K \ge M$ one can find a good set with at least $cK$ elements all elements of which doesn't exceed $K$.
(Yahor Dubovik)
