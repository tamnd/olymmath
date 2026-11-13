---
tag: MA78KNAY7V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1999 Slovenia National Olympiad
    url: https://artofproblemsolving.com/community/c6h2519923
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=59546
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=251679
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: si-mo/1999
    source: hf-ai-mo-aops
    label: 1999 Slovenia National Olympiad
---
The numbers $1,\frac12,\frac13,\ldots,\frac1{1999}$ are written on a blackboard. In every step, we choose two of them, say $a$ and $b$ , erase them, and write the number $ab+a+b$ instead. This step is repeated until only one number remains. Can the last remaining number be equal to $2000$ ?
