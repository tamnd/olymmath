---
tag: K4SWEF4ZCW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=103
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hk-pc
    source: hf-mathnet
    label: Hong Kong IMO HK TST
---
Find, with reasons, all functions $f : \mathbb{N} \to \mathbb{N}$ such that
(i) $f(n) = 1$ if and only if $n = 1$,
(ii) if $d = \text{gcd}(n, m)$, then $f(nm) = \frac{f(n)f(m)}{f(d)}$, and
(iii) $f^{2004}(n) = n$ for every $n \in \mathbb{N}$, where $f^{2004}(n) = \underbrace{f(f(\cdots f(n)))}_{2004}$,
or show that they do not exist.
