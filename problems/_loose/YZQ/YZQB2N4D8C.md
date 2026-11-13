---
tag: YZQB2N4D8C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216048
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
How many pairs $(a, b)$ for integers $a, b \ge 2$ which exist the sequence $x_1, x_2, . . . , x_{1000}$ which satisfy conditions as below?
1.Terms $x_1, x_2, . . . , x_{1000}$ are sorting of $1, 2, . . . , 1000$.
2.For each integers $1 \le i < 1000$, the sequence forms $x_{i+1} = x_i + a$ or $x_{i+1} = x_i - b$.
