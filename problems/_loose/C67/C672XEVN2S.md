---
tag: C672XEVN2S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1997 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h56760
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44150
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240423
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/1997
    source: hf-ai-mo-aops
    label: 1997 Iran MO (3rd Round)
---
Let $S = \{x_0, x_1,\dots , x_n\}$ be a finite set of numbers in the interval $[0, 1]$ with $x_0 = 0$ and $x_1 = 1$ . We consider pairwise distances between numbers in $S$ . If every distance that appears, except the distance $1$ , occurs at least twice, prove that all the $x_i$ are rational.
