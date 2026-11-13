---
tag: HM439HD7XZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Canadian Mathematical Olympiad Qualification
    url: https://artofproblemsolving.com/community/c6h1259333
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=13654
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215495
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ca-cmoqr/2016
    source: hf-ai-mo-aops
    label: 2016 Canadian Mathematical Olympiad Qualification
---
Starting at $(0, 0)$ , Richard takes $2n+1$ steps, with each step being one unit either East, North, West, or South. For each step, the direction is chosen uniformly at random from the four possibilities. Determine the probability that Richard ends at $(1, 0)$ .
