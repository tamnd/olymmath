---
tag: ANBDMWKKA1
kind: problem
type: answer
answer: "8"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=266802
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A dog has three trainers:

- The first trainer gives him a treat right away.

- The second trainer makes him jump five times, then gives him a treat.

- The third trainer makes him jump three times, then gives him no treat.

The dog will keep picking trainers with equal probability until he gets a treat. (The dog's memory isn't so good, so he might pick the third trainer repeatedly!) What is the expected number of times the dog will jump before getting a treat?
