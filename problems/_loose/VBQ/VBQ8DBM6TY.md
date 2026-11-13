---
tag: VBQ8DBM6TY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0001.parquet#row=433
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define the function $S: \mathbb{Z}^+ \to \mathbb{Z}^+$ to be the sum of prime divisors (not necessarily distinct) of $n$ (if $v_p(n) = a$ then add $p \cdot a$ to the sum). Prove that
$$
\frac{\tau(n!)}{\tau((n-1)!)} \le \frac{4S(n)}{n}.
$$
