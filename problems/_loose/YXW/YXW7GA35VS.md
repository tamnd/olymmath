---
tag: YXW7GA35VS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Soviet_Union/train/0001.parquet#row=30
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian
    source: hf-mathnet
    label: Soviet Union 15th ASU
---
Write down a row of arbitrary integers (repetitions allowed). Now construct a second row as follows. Suppose the integer $n$ is in column $k$ in the first row. In column $k$ in the second row write down the number of occurrences of $n$ in row 1 in columns 1 to $k$ inclusive. Similarly, construct a third row under the second row (using the values in the second row), and a fourth row. An example follows:

| 7 | 1 | 2 | 1 | 7 | 1 | 1 |
|---|---|---|---|---|---|---|
| 1 | 1 | 1 | 2 | 2 | 3 | 4 |
| 1 | 2 | 3 | 1 | 2 | 1 | 1 |
| 1 | 1 | 1 | 2 | 2 | 3 | 4 |

Show that the fourth row is always the same as the second row.
