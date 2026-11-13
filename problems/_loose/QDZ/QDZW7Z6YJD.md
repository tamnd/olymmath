---
tag: QDZW7Z6YJD
kind: problem
type: answer
answer: a0 ∈ {2, 3, 4, 7, 8}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Brazil/train/0001.parquet#row=110
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: br-obm
    source: hf-mathnet
    label: Brazil XXIII OBM
---
For a given integer $a_0 > 1$ one defines a sequence $(a_n)_{n \ge 0}$ as follows: for each $k \ge 0$, define $a_{k+1}$ as the smallest integer greater than $a_k$ such that $\text{gcd}(a_{k+1}, a_0 a_1 \cdots a_k) = 1$. Determine all values $a_0$ for which all terms $a_k$ are primes or powers of primes.
