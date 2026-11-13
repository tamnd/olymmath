---
tag: H5SAAM84TA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2007 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h1459
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35894
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234362
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2007
    source: hf-ai-mo-aops
    label: 2007 China Team Selection Test
---
Find the smallest constant $ k$ such that

$ \frac {x}{\sqrt {x + y}} + \frac {y}{\sqrt {y + z}} + \frac {z}{\sqrt {z + x}}\leq k\sqrt {x + y + z}$

for all positive $ x$ , $ y$ , $ z$ .
