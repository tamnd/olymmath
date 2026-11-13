---
tag: 3RWD12VFN7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1988 Irish Math Olympiad
    url: https://artofproblemsolving.com/community/c6h1520074
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44677
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240915
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo/1988
    source: hf-ai-mo-aops
    label: 1988 Irish Math Olympiad
---
Let $0\le x\le 1$ . Show that if $n$ is any positive integer, then $$ (1+x)^n\ge (1-x)^n+2nx(1-x^2)^{\frac{n-1}{2}} $$ .
