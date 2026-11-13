---
tag: 97N7XKTXYR
kind: problem
type: answer
answer: 2^n - n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0000.parquet#row=310
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo
    source: hf-mathnet
    label: Ukraine Ukrainian Mathematical Olympiad
---
Let $n \geq 1$ be integer. Sequence $a_1, a_2, \dots, a_{2n}$ is called lucky if

1) $a_1, \dots, a_n$ is a permutation of $\{1, 2, \dots, n\}$;

2) $a_k = a_{n+k}$ for all $k = 1, 2, \dots, n$;

3) there exist indices $1 \le i_1 < i_2 < \dots < i_n \le 2n$ such that $a_{i_k} = k$ for all $k = 1, 2, \dots, n$.

For each $n \geq 1$ find the number of lucky sequences.
