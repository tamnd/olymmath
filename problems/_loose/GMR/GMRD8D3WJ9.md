---
tag: GMRD8D3WJ9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025  Olympic Revenge
    url: https://artofproblemsolving.com/community/c6h3493079
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=32912
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: olympic-revenge/2025
    source: hf-ai-mo-aops
    label: 2025  Olympic Revenge
---
DK plays the following game in a simple graph: in each round, he does one of the two operations:

(*i*) Choose a vertex of odd degree and delete it. Before doing that, DK changes the relation between every two
neighbors of the chosen vertex (that is, if they were connected by an edge, then remove this edge, and, if this edge did not exist, then put this edge on the graph).

(*ii*) Choose a vertex of even degree and change the relation between every two neighbors of it (note that the chosen vertex is not deleted).

DK plays this game until there are no more edges on the graph. Show that the number of remaining vertices does not depend on the chosen operations.
