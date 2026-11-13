---
tag: B4PWACXWEA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1990 Iran MO (2nd round)
    url: https://artofproblemsolving.com/community/c6h380320
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44006
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240279
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo-r2/1990
    source: hf-ai-mo-aops
    label: 1990 Iran MO (2nd round)
---
Find all integer solutions to the equation
$$(x^2-x)(x^2-2x+2)=y^2-1$$
