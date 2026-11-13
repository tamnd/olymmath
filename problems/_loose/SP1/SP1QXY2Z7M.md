---
tag: SP1QXY2Z7M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1998 Singapore Senior Math Olympiad
    url: https://artofproblemsolving.com/community/c6h2051720
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=59347
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=251484
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sg-smo/1998
    source: hf-ai-mo-aops
    label: 1998 Singapore Senior Math Olympiad
---
Prove that $1998! \left( 1+ \frac12 + \frac13 +...+\frac{1}{1998}\right)$ is an integer divisible by $1999$ .
