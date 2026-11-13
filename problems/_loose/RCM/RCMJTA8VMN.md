---
tag: RCMJTA8VMN
kind: problem
type: answer
answer: All positive integers n with n ≡ 2, 6, 7, or 8 (mod 11).
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Vietnam/train/0000.parquet#row=79
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For each positive integer $n$, consider the set
$$
T_n = \{ 11(h + k) + 10(n^h + n^k) \mid h, k \in \mathbb{N} \text{ và } 1 \le h \le k \le 10 \}.
$$
Find all positive integers $n$, such that the set $T_n$ has the following property: For all $a, b$ in $T_n$ with $a \ne b$, we always have $a - b$ is not divisible by $110$.
($N$ denotes the set of non-negative integers).
