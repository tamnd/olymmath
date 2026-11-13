---
tag: 7CHVA8TWT6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Miklós Schweitzer
    url: https://artofproblemsolving.com/community/c6h3271714
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=42055
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=238708
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: schweitzer/2023
    source: hf-ai-mo-aops
    label: 2023 Miklós Schweitzer
---
Let $X =\{x_0, x_1,\ldots , x_n\}$ be the basis set of a finite metric space, where the points are inductively listed such that $x_k$ maximizes the product of the distances from the points $\{x_0, x_1,\ldots , x_{k-1}\}$ for each $1\leqslant k\leqslant n.$ Prove that if for each $x\in X$ we let $\Pi_x$ be the product of the distances from $x{}$ to every other point, then $\Pi_{x_n}\leqslant 2^{n-1}\Pi_x$ for any $x\in X.$
