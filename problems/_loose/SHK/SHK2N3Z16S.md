---
tag: SHK2N3Z16S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2005 Greece National Olympiad
    url: https://artofproblemsolving.com/community/c6h57845
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=40556
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237430
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: gr-hms/2005
    source: hf-ai-mo-aops
    label: 2005 Greece National Olympiad
---
We know that $k$ is a positive integer and the equation $$ x^3+y^3-2y(x^2-xy+y^2)=k^2(x-y) (1) $$ has one solution $(x_0,y_0)$ with
$x_0,y_0\in \mathbb{Z}-\{0\}$ and $x_0\neq y_0$ . Prove that

i) the equation (1) has a finite number of solutions $(x,y)$ with $x,y\in \mathbb{Z}$ and $x\neq y$ ;

ii) it is possible to find $11$ addition different solutions $(X,Y)$ of the equation (1) with $X,Y\in \mathbb{Z}-\{0\}$ and $X\neq Y$ where $X,Y$ are functions of $x_0,y_0$ .
