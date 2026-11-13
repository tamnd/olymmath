---
tag: DB3ETPWZVD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 JBMO Shortlist
    url: https://artofproblemsolving.com/community/c6h3099025
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=26181
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=226866
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Greece/train/0000.parquet#row=215
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: jbmo-sl/2022
    source: hf-ai-mo-aops
    label: 2022 JBMO Shortlist
---
Let $a, b,$ and $c$ be positive real numbers such that $a^2 + b^2 + c^2 = 3$ . Prove that $$ \frac{a^2 + b^2}{2ab} + \frac{b^2 + c^2}{2bc} + \frac{c^2 + a^2}{2ca} + \frac{2(ab + bc + ca)}{3} \ge 5 + |(a - b)(b - c)(c - a)|. $$
