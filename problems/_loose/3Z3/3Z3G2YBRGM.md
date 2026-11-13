---
tag: 3Z3G2YBRGM
kind: problem
type: answer
answer: a) a = b. b) No; for example a = 2 and b = 5.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=323
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo
    source: hf-mathnet
    label: Romania 74th Romanian Mathematical Olympiad
---
For a positive integer $m$ denote $S(m)$ the sum of its natural divisors, and if $n$ and $p$ are positive integers, denote $Q(n, p)$ the sum of the quotients of the division of $n$ by the natural divisors of $p$ (for instance, $Q(18, 10) = 18 + 9 + 3 + 1 = 31$).
Let $a$ and $b$ be two positive integers.
a) Prove that, if $S(a) = Q(a, b)$ and $S(b) = Q(b, a)$, then $a = b$.
b) Is it always true that, if $S(a) + S(b) = Q(a, b) + Q(b, a)$, then $a = b$?
