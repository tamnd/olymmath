---
tag: 5D5XBDYGM9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=168271
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's prove that if the sequence of partial sums of the positive-term sequence $a_{0}, a_{1}, \ldots, a_{n}, \ldots$ is

$$
s_{n}=a_{0}+a_{1}+\ldots+a_{n} (n=0,1,2, \ldots)
$$

tends to infinity, then the following sequence also tends to infinity:

$$
S_{n}=\frac{a_{1}}{s_{0}}+\frac{a_{2}}{s_{1}}+\ldots+\frac{a_{n}}{s_{n-1}}
$$
