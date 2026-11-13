---
tag: 9XX9KAY26H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 Germany Team Selection Test
    url: https://artofproblemsolving.com/community/c6h126192
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=40016
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237019
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-tst/2006
    source: hf-ai-mo-aops
    label: 2006 Germany Team Selection Test
---
Does there exist a natural number $n$ in whose decimal representation each digit occurs at least $2006$ times and which has the property that you can find two different digits in its decimal representation such that the number obtained from $n$ by interchanging these two digits is different from $n$ and has the same set of prime divisors as $n$ ?
