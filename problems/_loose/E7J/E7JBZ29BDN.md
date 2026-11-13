---
tag: E7JBZ29BDN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Kosovo National Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h396490
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=6730
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208856
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: xk-mo/2011
    source: hf-ai-mo-aops
    label: 2011 Kosovo National Mathematical Olympiad
---
A little boy wrote the numbers $1,2,\cdots,2011$ on a blackboard. He picks any two numbers $x,y$ , erases them with a sponge and writes the number $|x-y|$ . This process continues until only one number is left. Prove that the number left is even.
