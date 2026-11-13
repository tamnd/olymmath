---
tag: Y5BPKTEEK0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=69229
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There is the following method to check if a given number $N$ is divisible by 19:

1) drop the last digit of the number $N$;
2) add to the resulting number the product of the dropped digit by 2;
3) perform operations 1) and 2) with the resulting number until a number less than or equal to 19 remains.
4) if 19 remains, then 19 divides $N$, otherwise $N$ is not divisible by 19.

Prove the validity of this divisibility rule.
