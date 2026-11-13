---
tag: GXKRJ5PERD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2001 Mongolian Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2525359
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=48620
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=244533
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo/2001
    source: hf-ai-mo-aops
    label: 2001 Mongolian Mathematical Olympiad
---
Let $k\ge0$ be a given integer. Suppose there exists positive integer $n,d$ and an odd integer $m>1$ with $d\mid m^{2^k}-1$ and $m\mid n^d+1$ . Find all possible values of $\frac{m^{2^k}-1}d$ .
