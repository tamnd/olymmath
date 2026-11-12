---
tag: ATDKSFB904
kind: problem
type: answer
answer: "3.5"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=13056
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For positive numbers $a, b, c$, it is known that

$$
\frac{a+b+c}{a+b-c}=7, \frac{a+b+c}{a+c-b}=1.75
$$

What is the value of $\frac{a+b+c}{b+c-a}$?
