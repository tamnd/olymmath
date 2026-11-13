---
tag: W957SQSWZN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Tournament of Towns
    url: https://artofproblemsolving.com/community/c6h2022121
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28919
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228929
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2011 Tournament of Towns
---
Along a circle are $100$ white points. An integer $k$ is given, where $2 \le k \le 50$ . In each move, we choose a block of $k$ adjacent points such that the first and the last are white, and we paint both of them black. For which values of $k$ is it possible for us to paint all $100$ points black after $50$ moves?
