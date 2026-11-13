---
tag: WC7QDCPDKF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1941 Moscow Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1877746
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=56559
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249457
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-moscow/1941
    source: hf-ai-mo-aops
    label: 1941 Moscow Mathematical Olympiad
---
Given a quadrilateral, the midpoints $A, B, C, D$ of its consecutive sides, and the midpoints of its diagonals, $P$ and $Q$ . Prove that $\vartriangle BCP = \vartriangle ADQ$ .
