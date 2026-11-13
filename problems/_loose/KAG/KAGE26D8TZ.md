---
tag: KAGE26D8TZ
kind: problem
type: answer
answer: 9*ceil(L) + 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ireland/train/0000.parquet#row=384
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo
    source: hf-mathnet
    label: Ireland IRL_ABooklet
---
Let $N$ be a positive integer, $L$ and $x_i$ ($1 \le i \le N$) real numbers such that
$$
0 \le x_1 < x_2 < x_3 < \dots < x_N \le L.
$$
What is the least value of $N$ which ensures that at least 10 successive numbers $x_i$ all lie within a distance 1 of each other (i.e. we want $x_i, \dots, x_{i+9}$ so that $x_{i+9} \le x_i + 1$)? Your answer should give $N$ as a function of $L$ and be valid for all $L > 0$.
