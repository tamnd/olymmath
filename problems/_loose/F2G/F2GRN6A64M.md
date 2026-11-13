---
tag: F2GRN6A64M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2002 Croatia National Olympiad
    url: https://artofproblemsolving.com/community/c6h2525640
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=37297
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=235271
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hr-mo/2002
    source: hf-ai-mo-aops
    label: 2002 Croatia National Olympiad
---
Let $(a_n)_{n\in\mathbb N}$ be an increasing sequence of positive integers. A term $a_k$ in the sequence is said to be good if it a sum of some other terms (not necessarily distinct). Prove that all terms of the sequence, apart from finitely many of them, are good.
