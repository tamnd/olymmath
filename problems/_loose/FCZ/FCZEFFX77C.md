---
tag: FCZEFFX77C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Taiwan TST Round  2
    url: https://artofproblemsolving.com/community/c6h1626481
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=61152
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=253155
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2018
    source: hf-ai-mo-aops
    label: 2018 Taiwan TST Round  2
---
Find all functions $ f: \mathbb{Z} \to \mathbb{Z} $ such that $$ f\left(x+f\left(y\right)\right)f\left(y+f\left(x\right)\right)=\left(2x+f\left(y-x\right)\right)\left(2y+f\left(x-y\right)\right) $$ holds for all integers $ x,y $
