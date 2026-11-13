---
tag: PYV4F60FPT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2005 Federal Competition For Advanced Students, Part 2
    url: https://artofproblemsolving.com/community/c6h42614
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=30435
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229977
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: at-oemo/2005
    source: hf-ai-mo-aops
    label: 2005 Federal Competition For Advanced Students, Part 2
---
The function $f : (0,...2005) \rightarrow N$ has the properties that $f(2x+1)=f(2x)$ , $f(3x+1)=f(3x)$ and $f(5x+1)=f(5x)$ with $x \in (0,1,2,...,2005)$ . How many different values can the function assume?
