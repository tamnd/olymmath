---
tag: GYGPA49J9W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=251327
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a non-constant polynomial $P(x)=a_{n} x^{n}+a_{n-1} x^{n-1}+\ldots+a_{1} x+a_{0} \in \mathbb{R}[x], a_{n} \neq 0, n \in \mathbb{N}$, we say that $P$ is symmetric if $a_{k}=a_{n-k}$ for every $k=0,1, \ldots,\left\lceil\frac{n}{2}\right\rceil$. We define the weight of a non-constant polynomial $P \in \mathbb{R}[x]$, denoted by $t(P)$, as the multiplicity of its zero with the highest multiplicity.

a) Prove that there exist non-constant, monic, pairwise distinct polynomials $P_{1}, P_{2}, \ldots, P_{2021} \in \mathbb{R}[x]$, none of which is symmetric, such that the product of any two (distinct) polynomials is symmetric.

b) What is the smallest possible value of $t\left(P_{1} \cdot P_{2} \cdot \ldots \cdot P_{2021}\right)$, if $P_{1}, P_{2}, \ldots, P_{2021} \in \mathbb{R}[x]$ are non-constant, monic, pairwise distinct polynomials, none of which is symmetric, and the product of any two (distinct) polynomials is symmetric?
