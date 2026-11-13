---
tag: TNMZG8TE8J
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h500615
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8459
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210523
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2012
    source: hf-ai-mo-aops
    label: 2012 Online Math Open Problems
---
Darwin takes an $11\times 11$ grid of lattice points and connects every pair of points that are 1 unit apart, creating a $10\times 10$ grid of unit squares. If he never retraced any segment, what is the total length of all segments that he drew?

*Ray Li.*
