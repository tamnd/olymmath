---
tag: 9EWGQXJN3B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1957 Moscow Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1900359
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=56837
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249734
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-moscow/1957
    source: hf-ai-mo-aops
    label: 1957 Moscow Mathematical Olympiad
---
The distance between towns $A$ and $B$ is $999$ km.
At every kilometer of the road that connects $A$ and $B$ a sign shows the distances to $A$ and $B$ as follows: $\fbox{0-999}$ , $\fbox{1-998}$ , $\fbox{2-997}$ , $ . . . $ , $\fbox{998-1}$ , $\fbox{999-0}$ How many signs are there, with both distances written with the help of only two distinct digits?
