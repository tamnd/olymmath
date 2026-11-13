---
tag: 7CV3GA66XM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Caucasus Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1611863
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=21987
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=223247
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: caucasus/2017
    source: hf-ai-mo-aops
    label: 2017 Caucasus Mathematical Olympiad
---
Given a table in a form of the regular $1000$ -gon with sidelength $1$ . A Beetle initially is in one of its vertices. All $1000$ vertices are numbered in some order by numbers $1$ , $2$ , $\ldots$ , $1000$ so that initially the Beetle is in the vertex $1$ . The Beetle can move only along the edges of $1000$ -gon and only clockwise. He starts to move from vertex $1$ and he is moving without stops until he reaches vertex $2$ where he has a stop. Then he continues his journey clockwise from vertex $2$ until he reaches the vertex $3$ where he has a stop, and so on. The Beetle finishes his journey at vertex $1000$ . Find the number of ways to enumerate all vertices so that the total length of the Beetle's journey is equal to $2017$ .
