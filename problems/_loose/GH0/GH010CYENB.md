---
tag: GH010CYENB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33731
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\xi$ and $\eta$ be random variables for which $E \xi$ and $E \eta$ are defined, with at least one of them being infinite and the expression $E \xi + E \eta$ making sense (not of the form $\infty - \infty$ or $-\infty + \infty$). Then $\mathrm{E}(\xi + \eta) = \mathrm{E} \xi + \mathrm{E} \eta$. Prove this property using the analogous property for finite expectations.
