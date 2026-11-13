---
tag: 22NKS4C8TG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 China Western Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h237269
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=36541
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234463
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-wmo/2008
    source: hf-ai-mo-aops
    label: 2008 China Western Mathematical Olympiad
---
Four frogs are positioned at four points on a straight line such that the distance between any two neighbouring points is 1 unit length. Suppose the every frog can jump to its corresponding point of reflection, by taking any one of the other 3 frogs as the reference point. Prove that, there is no such case that the distance between any two neighbouring points, where the frogs stay, are all equal to 2008 unit length.
