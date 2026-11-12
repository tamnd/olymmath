---
tag: VTP46TW6NE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=13937
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are four locks and 6 keys. It is known that each key opens exactly 2 locks. Moreover, there are no two keys that open exactly the same two locks. Determine which key opens which two locks in no more than 13 checks. In one check, you can insert a key into a lock and check if it opens it or not.
