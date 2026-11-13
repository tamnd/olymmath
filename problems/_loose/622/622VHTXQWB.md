---
tag: 622VHTXQWB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0000.parquet#row=88
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo
    source: hf-mathnet
    label: Estonia Estonian Math Competitions
---
The teacher drew a $3 \times 3$ table in Juku's exercise book and wrote a number in every position of the table. Then he gave Juku the following task.

1. Turn the next page and draw a similar table. Write in the first row the numbers obtained by subtracting the numbers in the third row of the corresponding column from the numbers in the second row of the corresponding column in the previous table. Similarly, the numbers in the second and third row are obtained as differences of the third and the first, and the first and the second row.

2. Turn the next page and draw a new table. Write in the first column the numbers obtained by subtracting the numbers in the third column from the numbers in the second column in the corresponding row in the previous table. Similarly, the numbers in the second and third column are obtained as differences of the third and the first, and the first and the second column.

Repeat in turns steps 1 and 2 until you reach a table where all the numbers are zeroes. Juku has reached the end of the third page and has not yet reached the table with all zeroes in it. Prove that his task never ends.
