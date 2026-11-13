---
tag: 8ZFTMFV59K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=185464
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Show that there exists a plane polygon $P_{1} P_{2} P_{3} \ldots P_{n-1} P_{n}$ for which the following statements hold:

(1) The boundary line of the polygon has no self-intersections, that is: Except for the common vertices of consecutive sides $P_{1} P_{2}, P_{2} P_{3} ; P_{2} P_{3}, P_{3} P_{4} ; \ldots ; P_{n-2} P_{n-1}, P_{n-1} P_{n} ; P_{n-1} P_{n}, P_{n} P_{1} ; P_{n} P_{1}, P_{1} P_{2}$, there are no common points of any two sides.

(2) There exist two consecutive vertices $P_{k}, P_{k+1}(2<k<n-1)$, for which the following holds:

(2.1) By a suitable rotation around $P_{1}$, the line segment $P_{1} P_{2} \ldots P_{k-1} P_{k}$ is transformed into the line segment $P_{1} P_{n} \ldots P_{k+2} P_{k+1}$.

(2.2) By a point reflection at a suitable point $Q$, the line segment $P_{1} P_{2} \ldots P_{k} P_{k+1}$ is mapped onto itself (in reverse traversal, i.e., onto the line segment $P_{k+1} P_{k} \ldots P_{2} P_{1}$). As a solution, a drawing that sufficiently confirms these statements is sufficient.

A description or justification is not required. However, you can replace precise drawing with a - then gapless to be given - construction description.
