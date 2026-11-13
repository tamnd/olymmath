---
tag: SKYEG72MWP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2007 Iran MO (2nd Round)
    url: https://artofproblemsolving.com/community/c6h368221
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44105
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240378
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo-r2/2007
    source: hf-ai-mo-aops
    label: 2007 Iran MO (2nd Round)
---
Farhad has made a machine. When the machine starts, it prints some special numbers. The property of this machine is that for every positive integer $n$ , it prints exactly one of the numbers $n,2n,3n$ . We know that the machine prints $2$ . Prove that it doesn't print $13824$ .
