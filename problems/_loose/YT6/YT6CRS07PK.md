---
tag: YT6CRS07PK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=38675
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
a) Prove that for any natural number $n$ there exist exactly two natural $n$-digit* numbers $a_{n}$ and $b_{n}$ (different from $00 \ldots 0$ and $0 \ldots 01$), for which $a_{n}^{2}$ ends in $a_{n}$, and $b_{n}^{2}$ ends in $b_{n}$.

b) Prove that $a_{n}+b_{n}=10^{n}+1$.

c) Suppose the numbers $a_{n}$ and $a_{n+1}$ end in the same digit. Prove that then $a_{n+1}$ ends in $a_{n}$, and $b_{n+1}$ ends in $b_{n}$.

d) Prove that if $a_{n+1}$ and $a_{n}$ end in 5, then $a_{n+1}$ is the last $n+1$ digits of the number $a_{n}^{2}$, and if $b_{n+1}$ and $b_{n}$ end in 6, then $b_{n+1}$ is the last $n+1$ digits of the number $b_{n}^{5}$.
