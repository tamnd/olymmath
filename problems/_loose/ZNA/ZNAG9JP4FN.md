---
tag: ZNAG9JP4FN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h57572
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66297
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=257769
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ahsme
    source: hf-ai-mo-aops
    label: AHSME
---
Let $a$ and $c$ be fixed positive numbers. For each real number $t$ let $(x_t, y_t)$ be the vertex of the parabola $y = ax^2+bx+c$ . If the set of vertices $(x_t, y_t)$ for all real values of $t$ is graphed in the plane, the graph is

A. a straight line
B. a parabola
C. part, but not all, of a parabola
D. one branch of a hyperbola
E. None of these
