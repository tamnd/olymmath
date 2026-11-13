---
tag: NH9QG6YGK0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1999 Abels Math Contest (Norwegian MO)
    url: https://artofproblemsolving.com/community/c6h2005098
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=49503
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=245299
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: no-abel/1999
    source: hf-ai-mo-aops
    label: 1999 Abels Math Contest (Norwegian MO)
---
If $a,b,c$ are positive integers such that $b | a^3, c | b^3$ and $a | c^3$ , prove that $abc | (a+b+c)^{13}$
