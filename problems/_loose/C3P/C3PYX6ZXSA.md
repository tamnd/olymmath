---
tag: C3PYX6ZXSA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 239 Open Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2225198
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54877
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230321
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-239-open/2013
    source: hf-ai-mo-aops
    label: 2013 239 Open Mathematical Olympiad
---
We are given a graph $G$ with $n$ edges. For each edge, we write down the lesser degree of two vertices at the end of that edge. Prove that the sum of the resulting $n$ numbers is at most $100n\sqrt{n}$ .
