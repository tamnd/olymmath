---
tag: 3F4WFBEBPA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2007 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h338553
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73946
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263433
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: smt/2007
    source: hf-ai-mo-aops
    label: 2007 Stanford Mathematics Tournament
---
Pete has some trouble slicing a 20-inch (diameter) pizza. His first two cuts (from center to circumference of the pizza) make a 30º slice. He continues making cuts until he has gone around the whole pizza, each time trying to copy the angle of the previous slice but in fact adding 2º each time. That is, he makes adjacent slices of 30º, 32º, 34º, and so on. What is the area of the smallest slice?
