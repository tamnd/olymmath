---
tag: KMN0QQQ39G
kind: problem
type: answer
answer: a = 1 or a = 2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=18
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo
    source: hf-mathnet
    label: Romania Romanian Mathematical Olympiad
---
Consider a real number $a \ge 1$. The sequence $(x_n)_{n \ge 1}$ is given by $x_1 = a$ and $x_{n+1} = 1 + \log_2 x_n$, for any $n \in \mathbb{N}^*$. Determine values of $a$ such that all terms of the sequence are rational numbers.
