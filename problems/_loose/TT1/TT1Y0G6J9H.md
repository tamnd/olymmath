---
tag: TT1Y0G6J9H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90238
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0001.parquet#row=170
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p(x)$ be a polynomial of degree exactly 3, with real coefficients. For each real number $a$, let $q_{a}(x)$ be the unique polynomial of degree 2 or less such that $p(x)-q_{a}(x)$ is divisible by $(x-a)^{3}$. Prove that for $a \neq b$, the graphs of $q_{a}(x)$ and $q_{b}(x)$ do not intersect. Can you find a generalization to polynomials $p(x)$ of odd degree?
