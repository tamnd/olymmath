---
tag: VMA608AAKE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h426123
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73926
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263413
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: smt/2006
    source: hf-ai-mo-aops
    label: 2006 Stanford Mathematics Tournament
---
Find the total number of $k$ -tuples $(n_1,n_2,...,n_k)$ of positive integers so that $n_{i+1}\ge n_i$ for each $i$ , and $k$ regular polygons with numbers of sides $n_1,n_2,...,n_k$ respectively will fit into a tesselation at a point. That is, the sum of one interior angle from each of the polygons is $360^{\circ}$ .
