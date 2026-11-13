---
tag: 6JVPJYF480
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 Iran MO (2nd round)
    url: https://artofproblemsolving.com/community/c6h368353
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44100
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240373
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo-r2/2006
    source: hf-ai-mo-aops
    label: 2006 Iran MO (2nd round)
---
Some books are placed on each other. Someone first, reverses the upper book. Then he reverses the $2$ upper books. Then he reverses the $3$ upper books and continues like this. After he reversed all the books, he starts this operation from the first. Prove that after finite number of movements, the books become exactly like their initial configuration.
