---
tag: NCR0QHST8V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221899
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $k>1$ be a positive integer. A set $S{}$ is called *good* if there exists a colouring of the positive integers with $k{}$ colours, such that no element from $S{}$ can be written as the sum of two distinct positive integers having the same colour. Find the greatest positive integer $t{}$ (in terms of $k{}$) for which the set $$S=\{a+1,a+2,\ldots,a+t\}$$is good, for any positive integer $a{}$.
