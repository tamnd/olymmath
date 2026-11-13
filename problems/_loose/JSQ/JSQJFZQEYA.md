---
tag: JSQJFZQEYA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2007 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h164533
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44326
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240599
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2007
    source: hf-ai-mo-aops
    label: 2007 Iran MO (3rd Round)
---
Find the largest real $ T$ such that for each non-negative real numbers $ a,b,c,d,e$ such that $ a+b=c+d+e$ : $$ \sqrt{a^{2}+b^{2}+c^{2}+d^{2}+e^{2}}\geq T(\sqrt a+\sqrt b+\sqrt c+\sqrt d+\sqrt e)^{2}$$
