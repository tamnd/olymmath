---
tag: S4GT2CFBES
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=186163
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For each natural number $n \geq 2$, consider the following requirement:

One should distribute $2n$ objects into $n$ (sufficiently large) containers such that the following conditions are met:

(1) Each container contains at least one of the objects.

(2) Each container contains at most $n$ of the objects.

(3) It is not possible to place the $n$ containers in two separate (sufficiently large) rooms in such a way that $n$ of the objects end up in each of the two rooms.

a) Provide a distribution of 6 objects into 3 containers for $n=3$, and show that the distribution you provide meets conditions (1), (2), and (3)!

b) Prove that it is possible to meet the requirement if and only if $n$ is an odd number!

c) Determine all distributions of the required type for each odd $n \geq 3$!
