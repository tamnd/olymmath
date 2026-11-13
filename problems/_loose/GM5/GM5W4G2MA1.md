---
tag: GM5W4G2MA1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2002 Romania National Olympiad
    url: https://artofproblemsolving.com/community/c6h381497
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54034
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247584
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/2002
    source: hf-ai-mo-aops
    label: 2002 Romania National Olympiad
---
Let $f:[0,1]\rightarrow [0,1]$ be a continuous and bijective function.
Describe the set:
$$A=\{f(x)-f(y)\mid x,y\in[0,1]\backslash\mathbb{Q}\}$$
