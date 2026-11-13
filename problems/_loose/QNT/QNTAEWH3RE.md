---
tag: QNTAEWH3RE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=227360
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The vertices of a regular $2002$-sided polygon are numbered $1$ through $2002$, clockwise. Given an integer $ n$, $1 \le n \le 2002$, color vertex $n$ blue, then, going clockwise, count$ n$ vertices starting at the next of $n$, and color $n$ blue. And so on, starting from the vertex that follows the last vertex that was colored, n vertices are counted, colored or uncolored, and the number $n$ is colored blue. When the vertex to be colored is already blue, the process stops. We denote $P(n)$ to the set of blue vertices obtained with this procedure when starting with vertex $n$. For example, $P(364)$ is made up of vertices $364$, $728$, $1092$, $1456$, $1820$, $182$, $546$, $910$, $1274$, $1638$, and $2002$.
Determine all integers $n$, $1 \le n \le 2002$, such that $P(n)$ has exactly $14 $ vertices,
