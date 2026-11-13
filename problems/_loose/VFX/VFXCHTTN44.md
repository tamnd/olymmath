---
tag: VFXCHTTN44
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h2764188
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=4172
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206356
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: smt/2009
    source: hf-ai-mo-aops
    label: 2009 Stanford Mathematics Tournament
---
Rhombus $ABCD$ has side length $ 1$ . The size of $\angle A$ (in degrees) is randomly selected from all real numbers between $0$ and $90$ . Find the expected value of the area of $ABCD$ .
