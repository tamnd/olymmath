---
tag: W2WFZXZ8C2
kind: problem
type: answer
answer: \frac{15}{16}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=1373
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pl-om/1991
    source: hf-numinamath-1-5
    label: XLII OM - I - Problem 12
---
For any natural number $ n $, consider the rectangular prism $ K_n $ with edge lengths $ 1,1,n $ and the set $ R_n $ consisting of $ 4n+1 $ points: the vertices of the rectangular prism $ K_n $ and the points dividing its longer edges into unit segments. We randomly select three different points from the set $ R_n $. Let $ p_n $ be the probability that the selected points are the vertices of an obtuse triangle. Calculate $ \lim_{n\to \infty} p_n $.
Note: Three collinear points do not form a triangle.
