---
tag: V8CSD6H4H6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 Chile National Olympiad
    url: https://artofproblemsolving.com/community/c6h2730870
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=34392
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=233221
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cl-mo/2000
    source: hf-ai-mo-aops
    label: 2000 Chile National Olympiad
---
Consider the following equation in $x$ : $$ ax (x^2 + ax + 1) = b (x^2 + b + 1). $$ It is known that $a, b$ are real such that $ab <0$ and furthermore the equation has exactly two integer roots positive. Prove that under these conditions $a^2 + b^2$ is not a prime number.
