---
tag: MQJN9M113Q
kind: problem
type: answer
answer: "44"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Russia/train/0000.parquet#row=377
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian
    source: hf-mathnet
    label: Russia LI Всероссийская математическая олимпиада школьников
---
The chess King was placed on a cell of the board $8 \times 8$, and then he made $64$ moves so that he visited all the cells and returned back to the initial cell. At each moment, we calculate the distance from the center of the cell occupied by the King to the center of the board. We call the move *pleasant* if after the move this distance became less than it was before the move. Find the greatest possible number of pleasant moves.

(By one move the chess King moves to a cell adjacent by a side or by a vertex.)
