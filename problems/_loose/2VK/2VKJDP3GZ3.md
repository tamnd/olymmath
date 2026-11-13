---
tag: 2VKJDP3GZ3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1164277
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=78539
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267386
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2015
    source: hf-ai-mo-aops
    label: 2015 Online Math Open Problems
---
The two numbers $0$ and $1$ are initially written in a row on a chalkboard. Every minute thereafter, Denys writes the number $a+b$ between all pairs of consecutive numbers $a$ , $b$ on the board. How many odd numbers will be on the board after $10$ such operations?

*Proposed by Michael Kural*
