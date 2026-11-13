---
tag: MFK2QNR612
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Bulgaria JBMO TST
    url: https://artofproblemsolving.com/community/c6h2845223
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=32979
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=232013
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bg-jbmo-tst/2022
    source: hf-ai-mo-aops
    label: 2022 Bulgaria JBMO TST
---
Determine all triples $(a,b,c)$ of real numbers such that $$ (2a+1)^2 - 4b = (2b+1)^2 - 4c = (2c+1)^2 - 4a = 5. $$
