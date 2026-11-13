---
tag: M9YMRZ15VF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 French Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2522177
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39137
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236469
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: fr-tst/2000
    source: hf-ai-mo-aops
    label: 2000 French Mathematical Olympiad
---
Let $A,B,C$ be three distinct points in space, $(A)$ the sphere with center $A$ and radius $r$ . Let $E$ be the set of numbers $R>0$ for which there is a sphere $(H)$ with center $H$ and radius $R$ such that $B$ and $C$ are outside the sphere, and the points of the sphere $(A)$ are strictly inside it.

(a) Suppose that $B$ and $C$ are on a line with $A$ and strictly outside $(A)$ . Show that $E$ is nonempty and bounded, and determine its supremum in terms of the given data.
(b) Find a necessary and sufficient condition for $E$ to be nonempty and bounded
(c) Given $r$ , compute the smallest possible supremum of $E$ , if it exists.
