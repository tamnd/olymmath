---
tag: QVFASTM1YT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1977 Spain Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2983318
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=59860
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=251961
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: es-ome/1977
    source: hf-ai-mo-aops
    label: 1977 Spain Mathematical Olympiad
---
Prove that all square matrices of the form (with $a, b \in R$ ), $$ \begin{pmatrix}
a & b
-b & a
\end{pmatrix} $$ form a commutative field $K$ when considering the operations of addition and matrix product. Prove also that if $A \in K$ is an element of said field, there exist two matrices of $K$ such that the square of each is equal to $A$ .
