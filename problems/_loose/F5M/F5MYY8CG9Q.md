---
tag: F5MYY8CG9Q
kind: problem
type: answer
answer: "51"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=52840
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The company recorded its expenses in rubles under 100 budget items, resulting in a list of 100 numbers (each number has no more than two decimal places). Each accountant took a copy of the list and found an approximate sum of the expenses, acting as follows. First, he arbitrarily chose two numbers from the list, added them, discarded the digits after the decimal point (if any), and recorded the result in place of the two chosen numbers. With the resulting list of 99 numbers, he did the same, and so on, until only one integer remained in the list. It turned out that in the end, all accountants got different results. What is the maximum number of accountants that could have worked in the company?
