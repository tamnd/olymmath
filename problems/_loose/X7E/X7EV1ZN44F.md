---
tag: X7EV1ZN44F
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90305
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0001.parquet#row=31
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\sigma(n)$ denote the sum of the positive divisors of $n$. We say $n$ is perfect if $\sigma(n)=2 n$. If $n$ is a positive integer such that

$$
\frac{\sigma(n)}{n}=\frac{5}{3}
$$

show that $5 n$ is an odd perfect number.
