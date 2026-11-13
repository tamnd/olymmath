---
tag: AEQCSA6Z8B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Romania National Olympiad
    url: https://artofproblemsolving.com/community/c6h1625995
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=16930
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218569
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/2018
    source: hf-ai-mo-aops
    label: 2018 Romania National Olympiad
---
Let $n \in \mathbb{N}^*$ and consider a circle of length $6n$ along with $3n$ points on the circle which divide it into $3n$ arcs: $n$ of them have length $1,$ some other $n$ have length $2$ and the remaining $n$ have length $3.$ Prove that among these points there must be two such that the line that connects them passes through the center of the circle.
