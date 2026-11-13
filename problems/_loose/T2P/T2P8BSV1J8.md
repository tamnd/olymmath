---
tag: T2P8BSV1J8
kind: problem
type: answer
answer: n! \cdot (C(n) - C(n-1))
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241327
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A polynomial $P$ in $n$ variables and real coefficients is called *magical* if $P(\mathbb{N}^n)\subset \mathbb{N}$, and moreover the map $P: \mathbb{N}^n \to \mathbb{N}$ is a bijection. Prove that for all positive integers $n$, there are at least
$$n!\cdot (C(n)-C(n-1))$$
magical polynomials, where $C(n)$ is the $n$-th Catalan number.

Here $\mathbb{N}=\{0,1,2,\dots\}$.
