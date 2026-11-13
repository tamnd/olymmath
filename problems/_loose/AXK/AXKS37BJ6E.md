---
tag: AXKS37BJ6E
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: Kvant 2023
    url: https://artofproblemsolving.com/community/c6h3045859
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=26662
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=227208
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: journal-kvant/2023
    source: hf-ai-mo-aops
    label: Kvant 2023
---
Given an integer $h > 1$ . Let's call a positive common fraction (not necessarily irreducible) *good* if the sum of its numerator and denominator is equal to $h$ . Let's say that a number $h$ is *remarkable* if every positive common fraction whose denominator is less than $h$ can be expressed in terms of good fractions (not necessarily various) using the operations of addition and subtraction.
Prove that $h$ is remarkable if and only if it is prime.
(Recall that an common fraction has an integer numerator and a natural denominator.)
