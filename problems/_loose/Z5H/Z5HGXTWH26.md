---
tag: Z5HGXTWH26
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1973 IMO Shortlist
    url: https://artofproblemsolving.com/community/c6h368136
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=25178
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: isl/1973
    source: hf-ai-mo-aops
    label: 1973 IMO Shortlist
---
Consider the two square matrices
$$A=\begin{bmatrix} +1 & +1 &+1& +1 &+1 +1 &+1 &+1&-1 &-1 +1 &-1&-1 &+1& +1 +1 & -1 & -1 & -1 & +1 +1 &+1&-1 &+1&-1 \end{bmatrix} \text{ and } B=\begin{bmatrix} +1 & +1 &+1& +1 &+1 +1 &+1 &+1&-1 &-1 +1 &+1&-1& +1&-1 +1 &-1& -1& +1& +1 +1 & -1& +1&-1 &+1 \end{bmatrix}$$

with entries $+1$ and $-1$ . The following operations will be called elementary:

(1) Changing signs of all numbers in one row;

(2) Changing signs of all numbers in one column;

(3) Interchanging two rows (two rows exchange their positions);

(4) Interchanging two columns.

Prove that the matrix $B$ cannot be obtained from the matrix $A$ using these operations.
