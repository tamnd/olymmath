---
tag: DQQRCJBQHE
kind: problem
type: answer
answer: '\{1, 2^{n_1}, 2^{n_1}3^{n_2}, 2^{n_1}5^{n_2} : n_1, n_2 \in \mathbb{N}\}'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269041
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\Phi$ and $\Psi$ denote the Euler totient and Dedekind's totient respectively. Determine all $n$ such that $\Phi(n)$ divides $n +\Psi (n)$.
