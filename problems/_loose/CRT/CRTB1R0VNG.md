---
tag: CRTB1R0VNG
kind: problem
type: answer
answer: "24"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265820
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Sequences $a_n$ and $b_n$ are defined for all positive integers $n$ such that $a_1 = 5,$ $b_1 = 7,$

$$a_{n+1} = \frac{\sqrt{(a_n+b_n-1)^2+(a_n-b_n+1)^2}}{2},$$

and

$$b_{n+1} = \frac{\sqrt{(a_n+b_n+1)^2+(a_n-b_n-1)^2}}{2}.$$

$ $ \\
How many integers $n$ from 1 to 1000 satisfy the property that $a_n, b_n$ form the legs of a right triangle with a hypotenuse that has integer length?
