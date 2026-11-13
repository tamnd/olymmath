---
tag: 5RXZQ14QFQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h366005
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=4548
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206696
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/2010
    source: hf-ai-mo-aops
    label: 2010 All-Russian Olympiad
---
There are $100$ random, distinct real numbers corresponding to $100$ points on a circle. Prove that you can always choose $4$ consecutive points in such a way that the sum of the two numbers corresponding to the points on the outside is always greater than the sum of the two numbers corresponding to the two points on the inside.
