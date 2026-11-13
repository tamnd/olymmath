---
tag: Z922JEQC6R
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=134746
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $G$ be a connected graph, and let $r \in G$ be one of its vertices. Starting from $r$, move along the edges of $G$ to a vertex that has not been visited yet; if there is no such vertex to move to, then backtrack along the edge you just traversed (unless you return to vertex $r$, in which case you stop). Prove: All the edges that have been traversed form a regular tree of $G$ with $r$ as the root.
(The tree produced by this traversal method is called a depth-first search tree (depth-first search tree).)
