---
tag: GWE3A2KNFM
kind: problem
type: answer
answer: \frac{1}{2}(^2+1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=70330
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
From the table

| 1 | 2 | 3 | $\ldots$ | $a$ |
| :---: | :---: | :---: | :---: | :---: |
| $a+1$ | $a+2$ | $a+3$ | $\ldots$ | $2 a$ |
| $2 a+1$ | $2 a+2$ | $2 a+3$ | $\ldots$ | $3 a$ |
| $\ldots$ | $\ldots$ | $\ldots$ | $\ldots$ | $\ldots$ |
| $(a-1) a+1$ | $(a-1) a+2$ | $(a-1) a+3$ | $\ldots$ | $a^{2}$ |

$a$ numbers are selected such that no two of the selected numbers are in the same row or column of the table. Calculate the sum of the selected numbers.
