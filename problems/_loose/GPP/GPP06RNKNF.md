---
tag: GPP06RNKNF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2003 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h99382
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35809
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=149114
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2003
    source: hf-ai-mo-aops
    label: 2003 China Team Selection Test
---
Find all functions $f,g$ : $R \to R$ such that $f(x+yg(x))=g(x)+xf(y)$ for $x,y \in R$ .
