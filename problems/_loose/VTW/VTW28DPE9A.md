---
tag: VTW28DPE9A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2001 239 Open Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2113621
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54783
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230227
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-239-open/2001
    source: hf-ai-mo-aops
    label: 2001 239 Open Mathematical Olympiad
---
Assume that the connected graph $G$ has $n$ vertices all with degree at least three. Prove that there exists a spanning tree of $G$ with more than $\frac{2}{9}n$ leaves.
