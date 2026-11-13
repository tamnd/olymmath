---
tag: R2WFF5TXTV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1997 Moscow Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1314253
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=56881
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=72103
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-moscow/1997
    source: hf-ai-mo-aops
    label: 1997 Moscow Mathematical Olympiad
---
Given real numbers $a_1\leq{a_2}\leq{a_3}$ and $b_1\leq{b_2}\leq{b_3}$ such that $$ a_1+a_2+a_3=b_1+b_2+b_3, $$ $$ a_1a_2+a_2a_3+a_1a_3=b_1b_2+b_2b_3+b_1b_3. $$ Prove that if $a_1\leq{b_1},$ then $a_3\leq{b_3}$
