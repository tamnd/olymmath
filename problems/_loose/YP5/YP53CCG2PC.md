---
tag: YP53CCG2PC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2005 Austria Beginners' Competition
    url: https://artofproblemsolving.com/community/c6h2939549
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=30253
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229663
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: at-oemo-beg/2005
    source: hf-ai-mo-aops
    label: 2005 Austria Beginners' Competition
---
Determine all triples $(x,y,z)$ of real numbers that satisfy all of the following three equations: $$ \begin{cases} \lfloor x \rfloor + \{y\} =z \lfloor y \rfloor + \{z\} =x \lfloor z \rfloor + \{x\} =y \end{cases} $$
