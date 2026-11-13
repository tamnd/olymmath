---
tag: RK0BFZ7EHN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0000.parquet#row=250
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$$
S_n = \{(x, y) \in \mathbb{Z}^2 \mid 1 \le x, y \le 5n\}.
$$
A subset $A \subseteq S_n$ is said to be *sumfree* if
$$
(x_1, y_1), (x_2, y_2) \in A \implies (x_1 + x_2, y_1 + y_2) \notin A.
$$
Show that there exists a sumfree subset with at least $15n^2$ elements.
