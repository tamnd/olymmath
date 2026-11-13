---
tag: V2JB0BEHMP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Romania National Olympiad
    url: https://artofproblemsolving.com/community/c6h3052497
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1063
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204729
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/2023
    source: hf-ai-mo-aops
    label: 2023 Romania National Olympiad
---
Let $n \geq 2$ be a natural number. We consider a $(2n - 1) \times (2n - 1)$ table.Ana and Bob play the following game: starting with Ana, the two of them alternately color the vertices of the unit squares, Ana with red and Bob with blue, in $2n^2$ rounds. Then, starting with Ana, each one forms a vector with origin at a red point and ending at a blue point, resulting in $2n^2$ vectors with distinct origins and endpoints. If the sum of these vectors is zero, Ana wins. Otherwise, Bob wins. Show that Bob has a winning strategy.
