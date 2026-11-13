---
tag: JMHEPN29CF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 Irish Math Olympiad
    url: https://artofproblemsolving.com/community/c6h478212
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44860
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241098
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo/2006
    source: hf-ai-mo-aops
    label: 2006 Irish Math Olympiad
---
Let $n$ be a positive integer.
Find the greatest common divisor of the numbers $\binom{2n}{1},\binom{2n}{3},\binom{2n}{5},...,\binom{2n}{2n-1}$ .
