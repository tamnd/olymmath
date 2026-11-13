---
tag: PEV3NRVQV3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204051
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Initially memory of computer contained a single polynomial $x^2-1$. Every minute computer chooses any polynomial $f(x)$ from its memory and writes $f(x^2-1)$ and $f(x)^2-1$ to it, or chooses any two distinct polynomials $g(x), h(x)$ from its memory and writes polynomial $\frac{g(x) + h(x)}{2}$ to it (no polynomial is ever erased from its memory). Can it happen that after some time, memory of computer contains $P(x) = \frac{1}{1024}(x^2-1)^{2048} - 1$?

*(Proposed by Arsenii Nikolaiev)*
