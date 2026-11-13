---
tag: B820YGGW3E
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Vietnam National Olympiad
    url: https://artofproblemsolving.com/community/c6h3228594
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2310
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268174
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: vn-vmo/2024
    source: hf-ai-mo-aops
    label: 2024 Vietnam National Olympiad
---
In the space, there is a convex polyhedron $D$ such that for every vertex of $D$ , there are an even number of edges passing through that vertex. We choose a face $F$ of $D$ . Then we assign each edge of $D$ a positive integer such that for all faces of $D$ different from $F$ , the sum of the numbers assigned on the edges of that face is a positive integer divisible by $2024$ . Prove that the sum of the numbers assigned on the edges of $F$ is also a positive integer divisible by $2024$ .
