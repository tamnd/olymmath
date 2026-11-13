---
tag: J7RKC5DERT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Brazil/train/0001.parquet#row=104
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: br-obm
    source: hf-mathnet
    label: Brazil XXII OBM
---
Let $\sigma(n)$ be the sum of all positive divisors of $n$, where $n$ is a positive integer (for instance, $\sigma(6) = 12$ and $\sigma(11) = 12$). We say that $n$ is *almost perfect* if $\sigma(n) = 2n - 1$ (for instance, 4 is almost perfect since $\sigma(4) = 7$). Let $n \mod k$ be the remainder of the division of $n$ by $k$ and $s(n) = \sum_{1 \le k \le n} n \mod k$ (for instance, $s(6) = 0 + 0 + 0 + 2 + 1 + 0 = 3$ and $s(11) = 0 + 1 + 2 + 3 + 1 + 5 + 4 + 3 + 2 + 1 + 0 = 22$). Prove that $n$ is almost perfect if and only if $s(n) = s(n-1)$.
