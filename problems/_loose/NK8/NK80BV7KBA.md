---
tag: NK80BV7KBA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 CMIMC
    url: https://artofproblemsolving.com/community/c6h1225751
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=13825
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=215662
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2016
    source: hf-ai-mo-aops
    label: 2016 CMIMC
---
A $\emph{planar}$ graph is a connected graph that can be drawn on a sphere without edge crossings. Such a drawing will divide the sphere into a number of faces. Let $G$ be a planar graph with $11$ vertices of degree $2$ , $5$ vertices of degree $3$ , and $1$ vertex of degree $7$ . Find the number of faces into which $G$ divides the sphere.
