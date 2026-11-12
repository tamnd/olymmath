---
tag: RTTTRZMKPD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Tournament of Towns
    url: https://artofproblemsolving.com/community/c6h2847229
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=29149
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2022 Tournament of Towns
---
Consider a white 100×100 square. Several cells (not necessarily neighbouring) were
painted black. In each row or column that contains some black cells their number
is odd. Hence we may consider the middle black cell for this row or column (with
equal numbers of black cells in both opposite directions). It so happened that all
the middle black cells of such rows lie in different columns and all the middle black
cells of the columns lie in different rows.

a) Prove that there exists a cell that is both the middle black cell of its row and the middle black cell of its column.

b) Is it true that any middle black cell of a row is also a middle black cell of its column?
