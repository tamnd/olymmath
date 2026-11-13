---
tag: A1QVWVMHBX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=165790
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We divide a piece of chocolate into parts in several steps. In each step, we further divide the largest piece by weight (if there are multiple such pieces, we choose one of them) in such a way that none of the new pieces is larger in weight than half of the piece that is being further divided. Prove that after the $k$-th step, each of the resulting pieces is smaller than $\frac{2}{k+1}$ of the original chocolate's weight.
