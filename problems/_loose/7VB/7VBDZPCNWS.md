---
tag: 7VBDZPCNWS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1987 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h37430
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35643
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234164
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/1987
    source: hf-ai-mo-aops
    label: 1987 China Team Selection Test
---
Let $ G$ be a simple graph with $ 2 \cdot n$ vertices and $ n^{2}+1$ edges. Show that this graph $ G$ contains a $ K_{4}-\text{one edge}$ , that is, two triangles with a common edge.
