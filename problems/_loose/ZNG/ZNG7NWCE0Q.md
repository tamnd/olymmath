---
tag: ZNG7NWCE0Q
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2007 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h147174
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55893
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249294
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/2007
    source: hf-ai-mo-aops
    label: 2007 All-Russian Olympiad
---
An infinite sequence $(x_{n})$ is defined by its first term $x_{1}>1$ , which is a rational number, and the relation $x_{n+1}=x_{n}+\frac{1}{\lfloor x_{n}\rfloor}$ for all positive integers $n$ . Prove that this sequence contains an integer.
*A. Golovanov*
