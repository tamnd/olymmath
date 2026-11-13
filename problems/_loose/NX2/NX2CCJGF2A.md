---
tag: NX2CCJGF2A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: Russian TST 2015
    url: https://artofproblemsolving.com/community/c6h3056887
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=57153
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249972
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-tst/2015
    source: hf-ai-mo-aops
    label: Russian TST 2015
---
A worm is called an *adult* if its length is one meter. In one operation, it is possible to cut an adult worm into two (possibly unequal) parts, each of which immediately becomes a worm and begins to grow at a speed of one meter per hour and stops growing once it reaches one meter in length. What is the smallest amount of time in which it is possible to get $n{}$ adult worms starting with one adult worm? Note that it is possible to cut several adult worms at the same time.
