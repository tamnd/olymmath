---
tag: 2K4MC2EZGQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 BMT Spring
    url: https://artofproblemsolving.com/community/c6h2761909
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=69900
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=260835
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bmt/2015
    source: hf-ai-mo-aops
    label: 2015 BMT Spring
---
Determine the largest integer $n$ such that $2^n$ divides the decimal representation given by some permutation of the digits $2$ , $0$ , $1$ , and $5$ . (For example, $2^1$ divides $2150$ . It may start with $0$ .)
