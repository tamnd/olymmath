---
tag: MKA7S8G07Z
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=29384
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the numerical triangle
```
1
111
12321
1367631
```

each number is equal to the sum of the three numbers located in the previous row above this number and its neighbors to the right and left; in the absence of one of these two numbers in the previous row, they are replaced by zeros.

Prove that in each row, starting from the third, there will be an even number.
