---
tag: H8PNRHJZ0D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=245812
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f: \mathbb{Q}\to \mathbb{Q}$ such that for all $x,y,z \in \mathbb{Q}$: $$f(x+y+z)+f(x-y)+f(y-z)+f(z-x)=3f(x)+3f(y)+3f(z).$$
