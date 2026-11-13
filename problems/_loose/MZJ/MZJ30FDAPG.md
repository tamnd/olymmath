---
tag: MZJ30FDAPG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77828
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: fr
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/France/train/0000.parquet#row=36
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $m, n \geqslant 2$ be integers satisfying the following property:

$$
a^{n} \equiv 1 (\bmod m) a=1, \ldots, n
$$

Prove that $m$ is a prime number and that $n=m-1$.
