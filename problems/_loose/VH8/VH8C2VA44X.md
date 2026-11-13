---
tag: VH8C2VA44X
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=163031
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence $\left\{a_{n}\right\}_{n \in \mathbb{N}}$ is given by the first term $a_{1}=3$ and the recursive relation $\left(3-a_{n+1}\right)\left(6+a_{n}\right)=$ 18 for all $n \geq 1$. Prove that for any natural number $n$,

$$
\sum_{k=1}^{n} \frac{1}{a_{k}}=\frac{2^{n+1}}{3}-\frac{n+2}{3}
$$
