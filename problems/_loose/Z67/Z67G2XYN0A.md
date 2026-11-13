---
tag: Z67G2XYN0A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Iran MO (3rd round)
    url: https://artofproblemsolving.com/community/c6h1506602
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44392
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240666
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2017
    source: hf-ai-mo-aops
    label: 2017 Iran MO (3rd round)
---
Let $\mathbb{R}^{\ge 0}$ be the set of all nonnegative real numbers. Find all functions $f:\mathbb{R}^{\ge 0} \to \mathbb{R}^{\ge 0}$ such that $$ x+2 \max\{y,f(x),f(z)\} \ge f(f(x))+2 \max\{z,f(y)\} $$ for all nonnegative real numbers $x,y$ and $z$ .
