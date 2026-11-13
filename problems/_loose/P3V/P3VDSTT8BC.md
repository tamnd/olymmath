---
tag: P3VDSTT8BC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2001 Croatia National Olympiad
    url: https://artofproblemsolving.com/community/c6h2537213
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=37276
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=235250
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hr-mo/2001
    source: hf-ai-mo-aops
    label: 2001 Croatia National Olympiad
---
Numbers $1,\frac12,\frac13,\ldots,\frac1{2001}$ are written on a blackboard. A student erases two numbers $x,y$ and writes down the number $x+y+xy$ instead. Determine the number that will be written on the board after $2000$ such operations.
