---
tag: XBQMX9V7CX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h3065231
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=74149
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263635
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: smt/2023
    source: hf-ai-mo-aops
    label: 2023 Stanford Mathematics Tournament
---
$f(x)$ is a nonconstant polynomial. Given that $f(f(x)) + f(x) = f(x)^2$ , compute $f(3)$ .
