---
tag: 3E1HHPA78N
kind: problem
type: answer
answer: a_{3}=14,a_{4}=140
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=73576
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{n}$ be the number of ways to fill an $n \times n$ board with the digits 0 and 1, such that the sum in each row and each column is the same. For example, the $2 \times 2$ boards that satisfy this rule are:

| 0 | 0 |
| :--- | :--- |
| 0 | 0 |

| 1 | 0 |
| :--- | :--- |
| 0 | 1 |

| 0 | 1 |
| :--- | :--- |
| 1 | 0 |

| 1 | 1 |
| :--- | :--- |
| 1 | 1 |

Therefore, $a_{2}=4$. Calculate the values of $a_{3}$ and $a_{4}$.
