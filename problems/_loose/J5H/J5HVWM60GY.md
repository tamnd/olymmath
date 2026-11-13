---
tag: J5HVWM60GY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=106936
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
17 (12 points) If a sequence $\left\{a_{n}\right\}$ satisfies $a_{i-1} \cdot a_{i+1} \leqslant a_{i}^{2}$ for any three consecutive terms $a_{i-1}, a_{i}, a_{i+1}$, then the sequence is called a "logarithmically convex sequence". Suppose the positive sequence $a_{0}, a_{1}, a_{2}, \cdots, a_{n}$ is a "logarithmically convex sequence". Prove that:
$$
\left(\frac{1}{n+1} \sum_{i=0}^{n} a_{i}\right)\left(\frac{1}{n-1} \sum_{j=1}^{n-1} a_{j}\right) \geqslant\left(\frac{1}{n} \sum_{i=0}^{n-1} a_{i}\right)\left(\frac{1}{n} \sum_{j=1}^{n} a_{j}\right) .
$$
