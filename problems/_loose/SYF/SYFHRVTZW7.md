---
tag: SYFHRVTZW7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Grosman Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2927861
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=45048
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241260
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: il-grossman/2022
    source: hf-ai-mo-aops
    label: 2022 Grosman Mathematical Olympiad
---
Let $k\leq n$ be two positive integers. $n$ points are marked on a line. It is known that for each marked point, the number of marked points at a distance $\leq 1$ from it (including the point itself) is divisible by $k$ .
Show that $k$ divides $n$ (without remainder).
