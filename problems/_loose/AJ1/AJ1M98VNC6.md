---
tag: AJ1M98VNC6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 Cuba MO
    url: https://artofproblemsolving.com/community/c6h3403694
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=37525
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cu-mo/2014
    source: hf-ai-mo-aops
    label: 2014 Cuba MO
---
We have two $20 \times 13$ rectangular grids with $260$ unit cells. each one. We insert in the boxes of each of the grids the numbers $1, 2, ..., 260$ as follows: $\bullet$ For the first grid, we start by inserting the numbers $1, 2, ..., 13$ in the boxes in the top row from left to right. We continue inserting numbers $14$ , $ 15$ , $...$ , $26$ in the second row from left to right. We maintain the same procedure until in the last row, $20$ , the numbers are placed $248$ , $249$ , $...$ , $260$ from left to right. $\bullet$ For the second grid we start by inserting the numbers $1$ , $2$ , $ ..$ ., $20$ from top to bottom in the farthest column right. We continue inserting the numbers $21$ , $22$ , $ ...$ , $40$ in the second column from the right also from top to bottom.

We maintain that same procedure until we reach the column on the left where we place the numbers from top to bottom $241$ , $242$ , $ ...$ , $260$ .

Determines the integers inserted in the boxes located in the same position in both grids.
