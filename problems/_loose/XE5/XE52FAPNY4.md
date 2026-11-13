---
tag: XE52FAPNY4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=172931
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given three points: $A, B$, and $P$, and a distance $d$. The plane $S$ needs to be constructed such that:

1) $\overline{S A}+\overline{S B}=d$
2) $\overline{S P}=d$
3) $S \perp P_{1}$
