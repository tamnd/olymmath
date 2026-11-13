---
tag: W0GR3QVW4P
kind: problem
type: answer
answer: n_{0}=n_{1}=n_{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=92128
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Inside a triangle (not on the sides) there are 3 points. Together with the 3 vertices of the original triangle, there are 6 points in total. Using these six points as vertices to form all non-overlapping triangles, if no three points among these 6 points are collinear, the number of all triangles is $n_{0}$; if three points among these 6 points are collinear (but no four points are collinear), the number of triangles formed is $n_{1}$; if four points among these 6 points are collinear, the number of triangles formed is $n_{2}$, then
(A) $n_{0}=n_{1}=n_{2}$;
(B) $n_{0}>n_{1}>n_{2}$;
(C) $n_{0}>n_{1} \geqslant n_{2}$;
(D) $n_{0} \geqslant n_{1}>n_{2}$.
