---
tag: 3YTVHP892P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Czech-Polish-Slovak Match
    url: https://artofproblemsolving.com/community/c6h422990
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=4790
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206956
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: caps/2010
    source: hf-ai-mo-aops
    label: 2010 Czech-Polish-Slovak Match
---
Let $p$ be a prime number. Prove that from a $p^2\times p^2$ array of squares, we can select $p^3$ of the squares such that the centers of any four of the selected squares are not the vertices of a rectangle with sides parallel to the edges of the array.
