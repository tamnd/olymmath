---
tag: GMJ91PEQQ3
kind: problem
type: answer
answer: n = p + 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Singapore/train/0000.parquet#row=127
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sg-smo
    source: hf-mathnet
    label: Singapore Singapore Mathematical Olympiad (SMO)
---
Let $p$ be a prime number. Determine the largest possible $n$ such that the following holds. It is possible to fill an $n \times n$ table with integers $a_{ik}$ in the $i$-th row and $k$-th column, for $1 \le i, k \le n$, such that for any quadruple $i, j, k, l$ with $1 \le i < j \le n$ and $1 \le k < l \le n$, the number $a_{ik}a_{jl} - a_{il}a_{jk}$ is not divisible by $p$.
