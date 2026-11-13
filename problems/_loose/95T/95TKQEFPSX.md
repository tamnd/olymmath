---
tag: 95TKQEFPSX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=182178
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A, B, a_{0}, b_{0}, a_{1}, b_{1}$, and $x$ be natural numbers, and suppose

$$
x \mid A^{a_{0}}+B^{b_{0}} \text { and } x \mid A^{a_{1}}-B^{b_{1}}
$$

where $c \mid d$ means that $c$ is a divisor of $d$. Prove that under these conditions,

$$
x \mid Z_{n}=A^{a_{1} n+a_{0}}+B^{b_{1} n+b_{0}}
$$

for every natural number $n$.
