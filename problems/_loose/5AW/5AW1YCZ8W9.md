---
tag: 5AW1YCZ8W9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 USA Team Selection Test
    url: https://artofproblemsolving.com/community/c6h550609
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8937
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=211001
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: us-tst/2012
    source: hf-ai-mo-aops
    label: 2012 USA Team Selection Test
---
There are 2010 students and 100 classrooms in the Olympiad High School. At the beginning, each of the students is in one of the classrooms. Each minute, as long as not everyone is in the same classroom, somebody walks from one classroom into a different classroom with at least as many students in it (prior to his move). This process will terminate in $M$ minutes. Determine the maximum value of $M$ .
