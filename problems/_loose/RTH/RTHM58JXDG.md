---
tag: RTHM58JXDG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1996 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h56591
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44140
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240413
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/1996
    source: hf-ai-mo-aops
    label: 1996 Iran MO (3rd Round)
---
Determine all functions $f : \mathbb N_0 \rightarrow \mathbb N_0 - \{1\}$ such that
$$f(n + 1) + f(n + 3) = f(n + 5)f(n + 7) - 1375, \forall n \in \mathbb N.$$
