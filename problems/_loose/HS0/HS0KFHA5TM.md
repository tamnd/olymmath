---
tag: HS0KFHA5TM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=182387
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The Diophantine equation $a x + b y = c$ with $a, b, c, x, y$ being integers and $\gcd(a, b) = 1$ has two solutions $\left(x_{1}, y_{1}\right)$ and $\left(x_{2}, y_{2}\right)$, for which $x_{1} = x_{2} + 1$.

Show that then $|b| = 1$ and $|a| = |y_{2} - y_{1}|$.
