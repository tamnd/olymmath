---
tag: 7YZ0V7YD0D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 Cuba MO
    url: https://artofproblemsolving.com/community/c6h3387919
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=37456
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cu-mo/2008
    source: hf-ai-mo-aops
    label: 2008 Cuba MO
---
There is a board of $2008\times 2008$ and $2008$ pieces, one in each row and each column of the board. It is allowed to do one of the following movements:

a) Take two steps to the right and $10$ up.
b) Take two steps to the right and $6$ steps down.
c) Take two steps to the left and $6$ steps up.
d) Take two steps to the left and $10$ steps down.

If the path down cannot be completed, it is skipped to the upper part along the same column and the route continues normally, similarly in the other directions. In each play you will move a checker using any of the allowed operations. Would it be possible that at some point, after a finite number of played, the pieces are located forming a square of side $44$ in the upper left corner of the board and the remaining $72$ are in the last row in the first $72$ boxes?
