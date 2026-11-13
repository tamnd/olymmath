---
tag: 1EN4MCZFC6
kind: problem
type: answer
answer: n4 = 3; n5 = 4
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=50
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$k$ cards numbered $1$ to $k$ are arranged at random in a row. In a move, we may change any block of consecutive cards whose numbers are in ascending or descending order and switch the block around. For example, in the case $k = 4$, $4132$ may be changed to $1432$ and $3214$ may be changed to $1234$. Suppose that in at most $n_k$ moves, we can arrange the $k$ cards so that their numbers are in ascending or descending order.

a. Prove that $n_4 = 3$.

b. Determine or estimate $n_5$.
