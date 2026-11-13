---
tag: 4JPF9ZZ8Q3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1992 French Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2560127
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39096
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236428
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: fr-tst/1992
    source: hf-ai-mo-aops
    label: 1992 French Mathematical Olympiad
---
Let $\Delta$ be a convex figure in a plane $\mathcal P$ . Given a point $A\in\mathcal P$ , to each pair $(M,N)$ of points in $\Delta$ we associate the point $m\in\mathcal P$ such that $\overrightarrow{Am}=\frac{\overrightarrow{MN}}2$ and denote by $\delta_A(\Delta)$ the set of all so obtained points $m$ .

(a)
i. Prove that $\delta_A(\Delta)$ is centrally symmetric.
ii. Under which conditions is $\delta_A(\Delta)=\Delta$ ?
iii. Let $B,C$ be points in $\mathcal P$ . Find a transformation which sends $\delta_B(\Delta)$ to $\delta_C(\Delta)$ .
(b) Determine $\delta_A(\Delta)$ if
i. $\Delta$ is a set in the plane determined by two parallel lines.
ii. $\Delta$ is bounded by a triangle.
iii. $\Delta$ is a semi-disk.
(c) Prove that in the cases $b.2$ and $b.3$ the lengths of the boundaries of $\Delta$ and $\delta_A(\Delta)$ are equal.
