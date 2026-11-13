---
tag: 7RYA1M5Q1T
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1996 IMO Shortlist
    url: https://artofproblemsolving.com/community/c6h81211
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=25318
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=122325
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: isl/1996
    source: hf-ai-mo-aops
    label: 1996 IMO Shortlist
---
Let $ABC$ be an equilateral triangle and let $P$ be a point in its interior. Let the lines $AP$ , $BP$ , $CP$ meet the sides $BC$ , $CA$ , $AB$ at the points $A_1$ , $B_1$ , $C_1$ , respectively. Prove that

$A_1B_1 \cdot B_1C_1 \cdot C_1A_1 \ge A_1B \cdot B_1C \cdot C_1A$ .
