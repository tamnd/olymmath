---
tag: WEX574E7DA
kind: problem
type: answer
answer: \frac{P_{1}P_{3}(P_{1}+P_{2})(P_{2}+P_{3})}{P_{2}(P_{2}^{2}-P_{1}P_{3})}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=187900
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In triangle $ABC$, a point $M$ is taken on side $AC$, and a point $N$ is taken on side $BC$. Segments $AN$ and $BM$ intersect at point $O$. The areas of triangles $AMO, ABO, BNO$ are $P_{1}, P_{2}, P_{3}$ respectively. Calculate the area of triangle $CMN$.
