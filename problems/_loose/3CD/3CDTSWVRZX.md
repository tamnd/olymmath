---
tag: 3CDTSWVRZX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 Harvard-MIT Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h609820
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=71363
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=149473
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hmmt/2000
    source: hf-ai-mo-aops
    label: 2000 Harvard-MIT Mathematics Tournament
---
A cubic polynomial $f$ satisfies $f(0)=0, f(1)=1, f(2)=2, f(3)=4$ . What is $f(5)$ ?
