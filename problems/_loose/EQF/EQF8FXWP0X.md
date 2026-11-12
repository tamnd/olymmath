---
tag: EQF8FXWP0X
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33472
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $P_{N}=\sum_{n=0}^{N}(N)_{n}$ be the total number of arrangements of $N$ elements $\left((N)_{0}=1,(N)_{n}=N(N-1) \ldots(N-n+1)\right), N \geqslant 1$. Show that the numbers $P_{N}$ satisfy the following recurrence relations ( $P_{0}=1$ ):

$$
P_{N}=N P_{N-1}+1, N \geqslant 1
$$

Show also that

$$
P_{N}=N!\sum_{n=0}^{N} \frac{1}{n!}
$$

and that $P_{N}$ is the nearest integer to $e N!$.
