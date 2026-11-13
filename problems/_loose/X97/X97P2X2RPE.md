---
tag: X97P2X2RPE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89753
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\tau(k)$ denote the number of positive divisors of the natural number $k$, and let $\varphi(k)$ denote the number of natural numbers not greater than $k$ that are relatively prime to $k$. A natural number $m$ is called beautiful if there exists a natural number $n$ such that

$$
\frac{\tau(m)}{m}=\frac{\varphi(n)}{n}
$$

Does there exist infinitely many beautiful numbers?
