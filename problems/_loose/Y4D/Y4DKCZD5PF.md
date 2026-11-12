---
tag: Y4DKCZD5PF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=42154
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Think of any integer from 1 to 26. Then consider the following six square tables one by one. If the thought-of number is in this table, write down the number in the top left corner of the table. Then add up all the numbers you have written down.

| 1 | 4 | 7 | 2 | 5 | 8 | 3 | 4 | 5 |
| ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 10 | 13 | 16 | 11 | 14 | 17 | 12 | 13 | 14 |
| 19 | 22 | 25 | 20 | 23 | 26 | 21 | 22 | 23 |
| 6 | 7 | 8 | 9 | 10 | 11 | 18 | 19 | 20 |
| 15 | 16 | 17 | 12 | 13 | 14 | 21 | 22 | 23 |
| 24 | 25 | 26 | 15 | 16 | 17 | 24 | 25 | 26 |

For example, the number 16 is present in the first, fourth, and fifth tables. If you add the numbers in the top left corner of these tables, you get $1 + 6 + 9 = 16$.

By following this method, you will always get the thought-of number. Could you explain the reason for this?
