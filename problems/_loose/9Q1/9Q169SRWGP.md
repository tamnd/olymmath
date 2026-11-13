---
tag: 9Q169SRWGP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=164324
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence $1,0,0,0, \ldots$ generates the sequence

$$
A=1,1,0,1,0,0,1,0,0,0, \ldots
$$

by writing its one-, two-, three-, etc. length segments consecutively; the periodic sequence $1,2,3,1,2,3,1,2,3, \ldots$ generates the sequence

$$
B=1,2,1,2,3,1,1,2,3,1,2,3,1,2,3, \ldots
$$

by writing its two-, four-, six-, etc. length segments consecutively; and finally, the sequence

$$
C=2,3,1,3,3,1,2,2,3,1,3,3,1,2,3,2, \ldots
$$

is obtained by adding the corresponding elements of $A$ and $B$. It is to be proven that none of the sequences $A, B, C$ are periodic.
