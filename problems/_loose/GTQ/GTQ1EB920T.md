---
tag: GTQ1EB920T
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Iran MO (2nd Round)
    url: https://artofproblemsolving.com/community/c6h1086524
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=12669
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=214575
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo-r2/2015
    source: hf-ai-mo-aops
    label: 2015 Iran MO (2nd Round)
---
There's a special computer and it has a memory. At first, it's memory just contains $x$ .
We fill up the memory with the following rules.

1) If $f\neq 0$ is in the memory, then we can also put $\frac{1}{f}$ in it.

2) If $f,g$ are in the memory, then we can also put $ f+g$ and $f-g$ in it.

Find all natural number $n$ such that we can have $x^n$ in the memory.
