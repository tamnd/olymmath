---
tag: EH1P7ZYNW3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=176578
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's prove the following divisibility rules in the base-12 number system:

a) A number is divisible by 11 if and only if the sum of its digits is also divisible by 11.

b) Add every second digit and separately the remaining ones. Prove that a number is divisible by 13 if and only if the difference between these two sums is also divisible by 13.

c) Divide the digits of the number into groups of three starting from the units place, and proceed with these groups as described in point b) for individual digits. Prove that if the difference between the resulting two numbers is divisible by 7, 13, or 19, then the original number is also divisible by the corresponding number; otherwise, it is not.

d) For which numbers can we decide divisibility if we proceed similarly by grouping the digits into pairs?
