---
tag: H2JMJREAKR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=168168
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define the sequence $a_{0}, a_{1}, \ldots$ as follows:

$$
a_{0}=a_{1}=1, a_{n+1}=2 a_{n}+a_{n-1} (n=1,2, \ldots)
$$

Prove that $2\left(a_{2 n}^{2}-1\right)$ is a perfect square for every positive integer $n$.
