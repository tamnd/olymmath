---
tag: M7S9MW4T0D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=57404
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p(n)$ be the number of partitions of the number $n$ (see the definition of partitions here). Prove the equalities:

$$
p(0)+p(1) x+p(2) x^{\prime \prime}+\ldots=\left(1+x+x^{2}+\ldots\right) \ldots\left(1+x^{k}+x^{2 k}+\ldots\right) \ldots=(1-x)^{-1}\left(1-x^{2}\right)^{-1}\left(1-x^{3}\right)^{-1} \ldots
$$

(By definition, it is considered that $p(0)=1$.)
