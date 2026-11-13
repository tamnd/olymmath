---
tag: 4NPGPSWXRS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Vietnam/train/0000.parquet#row=0
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence of integers $\{a_n\}$, $n = 0, 1, 2, \ldots$, is defined by:
$a_0 = 1$ and $a_n = a_{n-1} + a_{\lceil n/3 \rceil}$ for every $n = 1, 2, 3, \ldots$.
Prove that for every prime number $p \le 13$, there exists an infinite number of natural numbers $k$ such that $a_k$ is divisible by $p$.
([x] denotes the integral part of x).
