---
tag: VP5TKHNFA9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h500635
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8476
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210540
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2012
    source: hf-ai-mo-aops
    label: 2012 Online Math Open Problems
---
The numbers $1, 2, \ldots, 2012$ are written on a blackboard. Each minute, a student goes up to the board, chooses two numbers $x$ and $y$ , erases them, and writes the number $2x+2y$ on the board. This continues until only one number $N$ remains. Find the remainder when the maximum possible value of $N$ is divided by 1000.

*Victor Wang.*
