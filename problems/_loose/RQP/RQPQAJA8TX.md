---
tag: RQPQAJA8TX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1997 Irish Math Olympiad
    url: https://artofproblemsolving.com/community/c6h286703
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44764
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241002
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo/1997
    source: hf-ai-mo-aops
    label: 1997 Irish Math Olympiad
---
For a point $ M$ inside an equilateral triangle $ ABC$ , let $ D,E,F$ be the feet of the perpendiculars from $ M$ onto $ BC,CA,AB$ , respectively. Find the locus of all such points $ M$ for which $ \angle FDE$ is a right angle.
