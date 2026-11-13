---
tag: MG27ZGHA1Y
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250841
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0001.parquet#row=184
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $(a_n)$ be the integer sequence which is defined by $a_1= 1$ and
$$ a_{n+1}=a_n^2 + n \cdot a_n \, , \, \forall n \ge 1.$$
Let $S$ be the set of all primes $p$ such that there exists an index $i$ such that $p|a_i$.
Prove that the set $S$ is an infinite set and it is not equal to the set of all primes.
