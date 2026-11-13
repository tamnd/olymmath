---
tag: 7PWRHQER2S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1998 French Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2522758
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39128
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236460
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: fr-tst/1998
    source: hf-ai-mo-aops
    label: 1998 French Mathematical Olympiad
---
Let there be given two lines $D_1$ and $D_2$ which intersect at point $O$ , and a point $M$ not on any of these lines. Consider two variable points $A\in D_1$ and $b\in D_2$ such that $M$ belongs to the segment $AB$ .

(a) Prove that there exists a position of $A$ and $B$ for which the area of triangle $OAB$ is minimal. Construct such points $A$ and $B$ .
(b) Prove that there exists a position of $A$ and $B$ for which the area of triangle $OAB$ is minimal. Show that for such $A$ and $B$ , the perimeters of $\triangle OAM$ and $\triangle OBM$ are equal, and that $\frac{AM}{\tan\frac12\angle OAM}=\frac{BM}{\tan\frac12\angle OBM}$ . Construct such points $A$ and $B$ .
