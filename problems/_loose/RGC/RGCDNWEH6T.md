---
tag: RGCDNWEH6T
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h3135541
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44453
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240727
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2023
    source: hf-ai-mo-aops
    label: 2023 Iran MO (3rd Round)
---
For each $k$ , find the least $n$ in terms of $k$ st the following holds:
There exists $n$ real numbers $a_1 , a_2 ,\cdot \cdot \cdot , a_n$ st for each $i$ : $$ 0 < a_{i+1} - a_{i} < a_i - a_{i-1} $$ And , there exists $k$ pairs $(i,j)$ st $a_i - a_j = 1$ .
