---
tag: 7DWM7D0Q5W
kind: problem
type: answer
answer: "12"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=214952
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Deﬁne the determinant $D_1$ = $|1|$, the determinant $D_2$ =
$|1 1|$
$|1 3|$
, and the determinant $D_3=$
|1 1 1|
|1 3 3|
|1 3 5|
.
In general, for positive integer n, let the determinant $D_n$ have 1s in every position of its ﬁrst row and ﬁrst
column, 3s in the remaining positions of the second row and second column, 5s in the remaining positions of the third row and third column, and so forth. Find the least n so that $D_n$ $\geq$ 2015.
