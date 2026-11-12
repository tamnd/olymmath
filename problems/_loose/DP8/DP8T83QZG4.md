---
tag: DP8T83QZG4
kind: problem
type: answer
answer: "2231"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=41094
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Strange Multiplication. I was often asked to explain the following fact, which will undoubtedly interest many readers who were not previously aware of it. If someone correctly performs addition but cannot multiply or divide by numbers greater than 2, it turns out that they can obtain the product of any two numbers using the following strange method. For example, suppose we need to multiply 97 by 23. We form two columns of numbers:

| 97 | 23 |
| ---: | :---: |
| 48 | (46) |
| 24 | (92) |
| 12 | (184) |
| 6 | (368) |
| 3 | 736 |
| 1 | 1472 |
| | 2231 |

We successively divide the numbers in the first column by 2, discarding the remainder, until we get 1, and multiply the numbers in the second column by 2 the same number of times. If we cross out the products that stand opposite even numbers in the left column (we have enclosed them in parentheses) and add the remaining ones, we get the correct answer: 2231

Why?
