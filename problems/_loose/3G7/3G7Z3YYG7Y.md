---
tag: 3G7Z3YYG7Y
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206049
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence $ (a_n)_{n \in \mathbb{N}}$ is defined as follows:
$$ a_n = \dfrac{2}{3 + 1} + \dfrac{2^2}{3^2 + 1} + \dfrac{2^3}{3^4 + 1} + \ldots + \dfrac{2^{n + 1}}{3^{2^n} + 1}
$$
Prove that $ a_n < 1$ for any $ n \in \mathbb{N}$
