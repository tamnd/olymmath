---
tag: 1PPEG0VEVG
kind: problem
type: answer
answer: \frac{1}{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=73124
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $n$ numbers on a blackboard. The following operation is performed on these numbers: two numbers $a$ and $b$ are erased and then the number $\frac{a+b}{4}$ is written. The operation is repeated $n-1$ times. As a result, a single number remains on the board. Prove that if all the original numbers are equal to 1, then the resulting number is not less than $1 / n$.
