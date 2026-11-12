---
tag: J0SCHR32EX
kind: problem
type: answer
answer: "18"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=54109
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given two sequences: $2,4,8,16,14,10,2$ and 3, 6, 12. In each of them, each number is obtained from the previous one according to the same rule.

a) Find this rule.

b) Find all natural numbers that transform into themselves (according to this rule).

c) Prove that the number $2^{1991}$ will become a single-digit number after several transformations.
