---
tag: Y8EN1T4FME
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 CMIMC
    url: https://artofproblemsolving.com/community/c6h1221747
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=13767
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215604
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2016
    source: hf-ai-mo-aops
    label: 2016 CMIMC
---
Let $\lfloor x\rfloor$ denote the greatest integer function and $\{x\}=x-\lfloor x\rfloor$ denote the fractional part of $x$ . Let $1\leq x_1<\ldots<x_{100}$ be the $100$ smallest values of $x\geq 1$ such that $\sqrt{\lfloor x\rfloor\lfloor x^3\rfloor}+\sqrt{\{x\}\{x^3\}}=x^2.$ Compute $$\sum_{k=1}^{50}\dfrac{1}{x_{2k}^2-x_{2k-1}^2}.$$
