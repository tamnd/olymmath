---
tag: EB1XRHEEFG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240748
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Edges of a planar graph $G$ are colored either with blue or red. Prove that there is a vertex like $v$ such that when we go around $v$ through a complete cycle, edges with the endpoint at $v$ change their color at most two times.

Clarifications for complete cycle:
If all the edges with one endpoint at $v$ are $(v,u_1),(v,u_2),\ldots,(v,u_k)$ such that $u_1,u_2,\ldots,u_k$ are clockwise with respect to $v$ then in the sequence of $(v,u_1),(v,u_2),\ldots,(v,u_k),(v,u_1)$ there are at most two $j$ such that colours of $(v,u_j),(v,u_{j+1})$ ($j \mod k$) differ.
