---
tag: XB36ANPSNM
kind: problem
type: answer
answer: \begin{pmatrix}37&32&33\\30&34&38\\35&36&31\\\end{pmatrix}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=7439
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A trader sells stocks. It is known that stocks are sold once a month except during the summer, when the trader is on vacation. After economic analysis and entering the results of the past year into a table by months, it was found that the number of stocks sold corresponds to a $3 * 3$ magic square. The numbers in the square are unique and form a sequence with a difference of one. One of the numbers is 31, and the sum of the numbers in each row, column, and both diagonals of the square is 102.

| September | December | March |
| :---: | :---: | :---: |
| October | January | April |
| November | February | May |

Find the number of stocks sold each month and fill in the cells of the given square with numbers.
