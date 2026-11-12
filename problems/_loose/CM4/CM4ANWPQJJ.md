---
tag: CM4ANWPQJJ
kind: problem
type: answer
answer: "128"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=16027
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A seven-digit natural number $N$ is called interesting if:

- it consists of non-zero digits;
- it is divisible by 4;
- any number obtained from the number $N$ by permuting its digits is divisible by 4.

How many interesting numbers exist?
