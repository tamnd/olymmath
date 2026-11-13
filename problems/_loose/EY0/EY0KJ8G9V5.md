---
tag: EY0KJ8G9V5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h338365
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73893
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263380
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: smt/2006
    source: hf-ai-mo-aops
    label: 2006 Stanford Mathematics Tournament
---
Points $ A_1$ , $ A_2$ , $ ...$ are placed on a circle with center $ O$ such that $ \angle OA_n A_{n+1}=35^\circ$ and $ A_n\neq A_{n+2}$ for all positive integers $ n$ . What is the smallest $ n>1$ for which $ A_n=A_1$ ?
