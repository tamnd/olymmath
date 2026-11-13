---
tag: K1DVKMJPP0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=94582
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
+ Assume there are many chords $x y$ (let's say $x<_{T} y$), such that the paths $x T y$ have at least one common edge pairwise. Either find a large set of such vertices $x$ for which the corresponding vertices $y$ coincide, or find a vertex in $T$ with many incomparable $y$ above it, or find a long increasing path in $T$ such that the maximal vertex $t_{y}$ in $x T y$ is different for many $y$. Then find a long sequence of vertices $x_{1} \leqslant \cdots \leqslant x_{n}$ corresponding to these $y$, and prove that the union of these paths $x_{i} T y_{i}$ and chords $x_{i} y_{i}$ contains many edge-disjoint cycles.
