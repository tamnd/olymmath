---
tag: JVECBSGF2N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Iran/train/0000.parquet#row=237
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo
    source: hf-mathnet
    label: Iran 37th Iranian Mathematical Olympiad
---
Let $k \in \mathbb{Z}$ prove that there are infinitely many pairs of distinct positive integer numbers $n, m$ such that
$$
\begin{aligned}
n + S(2n) &= m + S(2m), \\
kn + S(n^2) &= km + S(m^2),
\end{aligned}
$$
where $S(n)$ is the sum of the digits of $n$ to base 10.
