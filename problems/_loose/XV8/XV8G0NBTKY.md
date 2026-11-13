---
tag: XV8G0NBTKY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Morocco National Olympiad
    url: https://artofproblemsolving.com/community/c6h404594
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=6852
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208981
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ma-mo/2011
    source: hf-ai-mo-aops
    label: 2011 Morocco National Olympiad
---
Find all functions $f:\mathbb{R}\rightarrow \mathbb{R}$ such that $\forall x\in \mathbb{R} \ \ f(x) = max(2xy-f(y))$ where $y\in \mathbb{R}$ .
