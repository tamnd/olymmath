---
tag: QZ4SWMAP4J
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Switzerland - Final Round
    url: https://artofproblemsolving.com/community/c6h2994752
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=60533
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=252611
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ch-smo/2012
    source: hf-ai-mo-aops
    label: 2012 Switzerland - Final Round
---
Consider a cube and two of its vertices $A$ and $B$ , which are the endpoints of a face diagonal. A *path* is a sequence of cube angles, each step of one angle along a cube edge is walked to one of the three adjacent angles. Let $a$ be the number of paths of length $2012$ that starts at point $A$ and ends at $A$ and let b be the number of ways of length $2012$ that starts in $A$ and ends in $B$ . Decide which of the two numbers $a$ and $b$ is the larger.
