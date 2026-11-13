---
tag: TZHSZQNVQ5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Baltic_Way/train/0000.parquet#row=423
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: baltic-way
    source: hf-mathnet
    label: Baltic Way BALTIC WAY
---
Let $p$ be a prime number. For each $k$, $1 \le k \le p-1$, there exists an integer $m$, $1 \le m \le p-1$, such that $mk \equiv 1 \pmod{p}$. We will denote this integer by $\frac{1}{k}$. Prove that the sequence
$$
1, 1+\frac{1}{2}, 1+\frac{1}{2}+\frac{1}{3}, \dots, 1+\frac{1}{2}+\dots+\frac{1}{p-1}
$$
(addition modulo $p$) contains at most $(p+1)/2$ distinct elements.
