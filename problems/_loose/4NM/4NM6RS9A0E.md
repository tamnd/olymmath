---
tag: 4NM6RS9A0E
kind: problem
type: answer
answer: a) yes; b) no
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Belarus/train/0001.parquet#row=245
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: by-mo/2022
    source: hf-mathnet
    label: Belarus Belarus2022
---
Let $a_1, a_2, \dots, a_n$ be the sequence of positive integers. For each number $\ell$ from $1$ to $n-1$ the following collection was found:
$$(\gcd(a_1, a_{1+\ell}), \gcd(a_2, a_{2+\ell}), \dots, \gcd(a_n, a_{n+\ell})),$$
where all indices are taken modulo $n$, i.e. if $s > n$ then $a_s = a_{s-n}$. It turned out that all these collections consist of the same $n$ pairwise distinct numbers maybe in different ordering.
Find out if $n$ can be equal to a) $21$; b) $2021$.
