---
tag: X6A3DTXTTA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h406950
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=6113
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208228
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/2011
    source: hf-ai-mo-aops
    label: 2011 All-Russian Olympiad
---
A quadratic trinomial $P(x)$ with the $x^2$ coefficient of one is such, that $P(x)$ and $P(P(P(x)))$ share a root. Prove that $P(0)*P(1)=0$ .
