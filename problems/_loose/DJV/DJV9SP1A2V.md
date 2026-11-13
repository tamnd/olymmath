---
tag: DJV9SP1A2V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h3137820
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44462
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240736
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
There's infinity of the following blocks on the table: $1*1 , 1*2 , 1*3 ,.., 1*n$ . We have a $n*n$ table and Ali chooses some of these blocks so that the sum of their area is at least $n^2$ . Then , Amir tries to cover the $n*n$ table so that none of blocks go out of the table and they don't overlap and he wanna maximize the covered area in the $n*n$ table with those blocks chosen by Ali. Let $k$ be the maximum coverable area independent of Ali's choice. Prove that: $$ n^2 - \lceil \frac{n^2}{4} \rceil \leq k \leq n^2 - \lfloor \frac{n^2}{8} \rfloor $$ *Note : the blocks can be placed only vertically or horizontally.
