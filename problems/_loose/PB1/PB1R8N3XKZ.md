---
tag: PB1R8N3XKZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Vietnam/train/0000.parquet#row=18
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let be given an integer $n \ge 2$ and a rectangular board of size $n \times 2n$ ($n$ rows, $2n$ columns). One labels randomly $n^2$ little squares of the board. Prove that for every integer $k$ such that $1 < k \le \lfloor n/2 \rfloor + 1$, there always exist $k$ rows of the board so that the rectangular board of size $k \times 2n$ formed by these $k$ rows has no less than
$$
\frac{k!(n - 2k + 2)}{(n - k + 1)(n - k + 2)\dots(n - 1)}
$$
columns containing only labelled little squares.

($[a]$ denotes the greatest integer not exceeding $a$)
