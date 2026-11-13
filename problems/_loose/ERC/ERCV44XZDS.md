---
tag: ERCV44XZDS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023-24 IOQM India
    url: https://artofproblemsolving.com/community/c6h3148244
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=42375
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=238955
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-prmo-ioqm/2023
    source: hf-ai-mo-aops
    label: 2023-24 IOQM India
---
For $n \in \mathbb{N}$ , consider non-negative valued functions $f$ on $\{1,2, \cdots , n\}$ satisfying $f(i) \geqslant f(j)$ for $i>j$ and $\sum_{i=1}^{n} (i+ f(i))=2023.$ Choose $n$ such that $\sum_{i=1}^{n} f(i)$ is at least. How many such functions exist in that case?
