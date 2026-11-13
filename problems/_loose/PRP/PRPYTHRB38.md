---
tag: PRPYTHRB38
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2002 Estonia National Olympiad
    url: https://artofproblemsolving.com/community/c6h2029958
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=38695
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236041
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo/2002
    source: hf-ai-mo-aops
    label: 2002 Estonia National Olympiad
---
Juku built a robot that moves along the border of a regular octagon, passing each side in exactly $1$ minute. The robot starts in some vertex $A$ and upon reaching each vertex can either continue in the same direction, or turn around and continue in the opposite direction. In how many different ways can the robot move so that after $n$ minutes it will be in the vertex $B$ opposite to $A$ ?
