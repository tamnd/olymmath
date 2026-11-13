---
tag: DHHCZPDJVE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 CMIMC
    url: https://artofproblemsolving.com/community/c6h1221865
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=13792
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215629
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2016
    source: hf-ai-mo-aops
    label: 2016 CMIMC
---
Andrew the Antelope canters along the surface of a regular icosahedron, which has twenty equilateral triangle faces and edge length 4. If he wants to move from one vertex to the opposite vertex, the minimum distance he must travel can be expressed as $\sqrt{n}$ for some integer $n$ . Compute $n$ .
