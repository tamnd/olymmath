---
tag: 7MS2YFZ4W1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2004 Peru MO (ONEM)
    url: https://artofproblemsolving.com/community/c6h2966839
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=50623
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246234
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pe-mo/2004
    source: hf-ai-mo-aops
    label: 2004 Peru MO (ONEM)
---
Let $x,y,z$ be positive real numbers, less than $\pi$ , such that: $$ \cos x + \cos y + \cos z = 0 $$ $$ \cos 2x + \cos 2 y + \cos 2z = 0 $$ $$ \cos 3x + \cos 3y + \cos 3z = 0 $$ Find all the values that $\sin x + \sin y + \sin z$ can take.
