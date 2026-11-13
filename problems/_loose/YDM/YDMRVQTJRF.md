---
tag: YDMRVQTJRF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h427559
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=5487
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207634
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pumac/2010
    source: hf-ai-mo-aops
    label: 2010 Princeton University Math Competition
---
Find (with proof) all natural numbers $n$ such that, for some natural numbers $a$ and $b$ , $a\ne b$ , the digits in the decimal representations of the two numbers $n^a+1$ and $n^b+1$ are in reverse order.
