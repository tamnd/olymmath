---
tag: WE1PPX795P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2002 Singapore Senior Math Olympiad
    url: https://artofproblemsolving.com/community/c6h2051942
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=59361
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=251498
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sg-smo/2002
    source: hf-ai-mo-aops
    label: 2002 Singapore Senior Math Olympiad
---
Prove that for natural numbers $p$ and $q$ , there exists a natural number $x$ such that $$ (\sqrt{p}+\sqrt{p-1})^q=\sqrt{x}+\sqrt{x-1} $$ (As an example, if $p = 3, q = 2$ , then $x$ can be taken to be $25$ .)
