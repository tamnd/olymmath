---
tag: FWE4E8BH99
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=30126
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be an arbitrary natural number, and $p_{1}^{n_{1}} p_{2}^{n_{2}} \ldots p_{k}^{n_{k}}$ be its prime factorization (where $p_{1}, p_{2}, \ldots, p_{k}$ are prime numbers, and $p_{1}<p_{2}<\ldots<p_{k})^{*}$. Prove that the number $\varphi(n)$ of irreducible proper fractions with denominator $n$ is given by the formula

$$
\varphi(n)=\left(p_{1}-1\right) \ldots\left(p_{k}-1\right) p_{1}^{n_{1}-1} \ldots p_{k}^{n_{k}-1}
$$
