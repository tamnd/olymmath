---
tag: CM2GDKFZJH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161690
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence $\left(a_{n}\right)$ is defined by the conditions $a_{1}=7$ and

$$
a_{n}=a_{n-1}+\text { gcd }\left(n, a_{n-1}\right)
$$

for $n \geqslant 2$. Prove that for every $n \geqslant 2$ the difference $a_{n}-a_{n-1}$ is either a prime number or unity.
