---
tag: M19VBDKRF9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=124314
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The forty-fourth question: A tournament graph is a directed graph where any two distinct vertices form an unordered pair with a directed edge from one vertex to the other. Define a "proper directed edge coloring" as assigning each directed edge a color such that every pair of directed edges $\overrightarrow{\mathrm{uv}}$ and $\overrightarrow{\mathrm{vW}}$ (where the endpoint of the first edge and the startpoint of the second edge are the same vertex v) have different colors. For a pair of directed edges $\overline{v u}$ and $\overline{\mathrm{vw}}$, they are allowed to be the same color; for a pair of directed edges $\overline{\mathrm{u}}$ and $\overline{\mathrm{v}}$, they are also allowed to be the same color. The number of colors of the directed edges of a tournament graph is the minimum number of colors required to perform a proper directed edge coloring. For each positive integer $\mathrm{n}$ and all $\mathrm{n}$-vertex tournament graphs, find the minimum number of colors $\mathrm{f}(\mathrm{n})$ for the directed edges.
