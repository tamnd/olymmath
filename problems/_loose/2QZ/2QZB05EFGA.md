---
tag: 2QZB05EFGA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h516622
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10044
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212040
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2013
    source: hf-ai-mo-aops
    label: 2013 Online Math Open Problems
---
Determine the number of ordered pairs of positive integers $(x,y)$ with $y < x \le 100$ such that $x^2-y^2$ and $x^3 - y^3$ are relatively prime. (Two numbers are *relatively prime* if they have no common factor other than $1$ .)

*Ray Li*
