---
tag: 86NN7RG3KS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Bulgaria/train/0001.parquet#row=130
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A positive integer $n$ and a function $f : \mathbb{N} \to \mathbb{N}$ are such that:
(1) $f(1) \le f(2) \le \dots \le f(n) \le f(1) + n$;
(2) $f(n + i) = f(i)$ for any positive integer $i$;
(3) $f(f(i)) \le n + i - 1$ for any positive integer $i$.
Prove that $f(1) + f(2) + \dots + f(n) \le n^2$.
