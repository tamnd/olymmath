---
tag: NH6TBJKKMK
kind: problem
type: answer
answer: S \cdot \frac{\sum_{i=1}^n h_i}{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=251288
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider a regular $n$-gon $A_1A_2\ldots A_n$ with area $S$. Let us draw the lines $l_1,l_2,\ldots,l_n$ perpendicular to the plane of the $n$-gon at $A_1,A_2,\ldots,A_n$ respectively. Points $B_1,B_2,\ldots,B_n$ are selected on lines $l_1,l_2,\ldots,l_n$ respectively so that:

(i) $B_1,B_2,\ldots,B_n$ are all on the same side of the plane of the $n$-gon;
(ii) Points $B_1,B_2,\ldots,B_n$ lie on a single plane;
(iii) $A_1B_1=h_1,A_2B_2=h_2,\ldots,A_nB_n=h_n$.

Express the volume of polyhedron $A_1A_2\ldots A_nB_1B_2\ldots B_n$ as a function in $S,h_1,\ldots,h_n$.
