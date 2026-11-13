---
tag: Q68WNWWCJE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=111318
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S$ be a subset of the $d$-dimensional Euclidean space $E^{d}$. If the distances between different points in $S$ take only two distinct values, then $S$ is called a two-distance set.

Regarding the maximum number of points $\operatorname{card}(S)$ in a two-distance set, it is known that in $E^{2}$ it is 5 (Kelly), and in $E^{3}$ it is 6 (Croft). For a two-distance set $S$ on the sphere in a general $d$-dimensional Euclidean space, Delsarte, Goethals, and Seidel ${ }^{[1]}$ proved that
$$
\operatorname{card}(S) \leqslant(d+1)(d+4) / 2 .
$$

Larman, Rogers, and Seidel ${ }^{[2]}$ proved that this inequality still holds for general two-distance sets $S$, and Blokhuis further proved ${ }^{[3]}$ that
$$
\operatorname{card}(S) \leqslant(d+1)(d+2) / 2 .
$$

This paper will prove that for a two-distance set $S$ on the sphere, the following inequality holds:
$$
\operatorname{card}(S) \leqslant d(d+3) / 2
$$
