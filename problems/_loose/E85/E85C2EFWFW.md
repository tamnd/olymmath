---
tag: E85C2EFWFW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1998 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h514549
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55706
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249091
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/1998
    source: hf-ai-mo-aops
    label: 1998 All-Russian Olympiad
---
A convex polygon is partitioned into parallelograms. A vertex of the polygon is called *good* if it belongs to exactly one parallelogram. Prove that there are more than two good vertices.
