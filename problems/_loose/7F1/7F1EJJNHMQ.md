---
tag: 7F1EJJNHMQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 India PRMO
    url: https://artofproblemsolving.com/community/c6h1892634
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=15601
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217295
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-prmo-ioqm/2017
    source: hf-ai-mo-aops
    label: 2017 India PRMO
---
Let $f(x) = \sin \frac{x}{3}+ \cos \frac{3x}{10}$ for all real $x$ .
Find the least natural number $n$ such that $f(n\pi + x)= f(x)$ for all real $x$ .
