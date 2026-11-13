---
tag: KWHD2BXHM9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 Romania National Olympiad
    url: https://artofproblemsolving.com/community/c6h202724
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54162
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247712
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/2008
    source: hf-ai-mo-aops
    label: 2008 Romania National Olympiad
---
Let $ n$ be a positive integer and let $ a_i$ be real numbers, $ i = 1,2,\ldots,n$ such that $ |a_i|\leq 1$ and $ \sum_{i=1}^n a_i = 0$ .
Show that $ \sum_{i=1}^n |x - a_i|\leq n$ , for every $ x\in \mathbb{R}$ with $ |x|\le 1$ .
