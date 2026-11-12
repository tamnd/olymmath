---
tag: BQSN2TE89Q
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=11021
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=351
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: jbmo-sl/2003
    source: hf-numina-olympiads
    label: JBMO-SL
---
Prove that there exist two sets $A=\{x, y, z\}$ and $B=\{m, n, p\}$ of positive integers greater than 2003 such that the sets have no common elements and the equalities $x+y+z=m+n+p$ and $x^{2}+y^{2}+z^{2}=m^{2}+n^{2}+p^{2}$ hold.
