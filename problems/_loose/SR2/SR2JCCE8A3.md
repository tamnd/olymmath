---
tag: SR2JCCE8A3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=186029
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In an old arithmetic book, the following method for multiplying the number 142857 by a natural number $n$, which is greater than 7, is given:

| | Example for $n=326$ |
| :--- | :--- |
| First, divide $n$ by 7 | $(326: 7=46$, remainder 4) |
| and write down the | |
| integer part of the result. | 46 |
| Then multiply 142857 by the remainder | $(142857 \cdot 4=571428)$ |
| and write the product behind the first written number. | 46571428 |
| From the number thus formed, subtract | -46 |
| the first written number. | $46571382=142857 \cdot 326$ |

However, it turns out that this method does not lead to the correct result for all natural numbers $n>7$.

a) Determine all natural numbers $n$ with $n>7$ for which the method leads to the correct result!

b) Name and justify for the other $n>7$ a method that leads to the correct result, which also avoids multiplying 142857 by a number greater than 7 and starts with the division of $n$ by 7!
