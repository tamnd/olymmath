---
tag: QXNHZVGCAX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 CMIMC
    url: https://artofproblemsolving.com/community/c6h1774494
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=17514
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219115
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2019
    source: hf-ai-mo-aops
    label: 2019 CMIMC
---
It is given that the roots of the polynomial $P(z) = z^{2019} - 1$ can be written in the form $z_k = x_k + iy_k$ for $1\leq k\leq 2019$ . Let $Q$ denote the monic polynomial with roots equal to $2x_k + iy_k$ for $1\leq k\leq 2019$ . Compute $Q(-2)$ .
