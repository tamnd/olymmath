---
tag: ZR0JNNMKHR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33825
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $X_{1}, X_{2}, \ldots-$ be i.i.d. bounded random variables, $\mathrm{E} X_{1}=0, \mathrm{a}$

$$
S_{n}=X_{1}+\ldots+X_{n}, n \geqslant 1
$$

Prove that for any $p>0$ the following equality holds

$$
\mathrm{E}\left|S_{n}\right|^{p}=O\left(n^{p / 2}\right)
$$
