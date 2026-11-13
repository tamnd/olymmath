---
tag: D3QTTQ613V
kind: problem
type: answer
answer: \frac{(\sqrt[3]{2})^{2}}{3}<0.53
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=185956
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\left(a_{n}\right)(n=0,1,2, \ldots)$ be a sequence of real numbers such that $a_{0}=0$ and $a_{n+1}^{3}=\frac{1}{2} \cdot a_{n}^{2}-1$ for all $n=1,2, \ldots$.

Show that there exists a positive real number $q<1$ such that for all $n=1,2, \ldots$

$$
\left|a_{n+1}-a_{n}\right| \leq q \cdot\left|a_{n}-a_{n-1}\right|
$$

holds, and provide such a real number $q$.
