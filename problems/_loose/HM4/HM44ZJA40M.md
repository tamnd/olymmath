---
tag: HM44ZJA40M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=109714
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $n$ lines in a plane, where no two are parallel and no three are concurrent. How many intersection points do these lines have? How many triangles can these lines generate? How many parts does the plane get divided into by these lines? How many of these parts are unbounded?

Given $n$ lines in a plane, where no two are parallel and no three are concurrent:
- The number of intersection points is $\binom{n}{2} = \frac{n(n-1)}{2}$.
- The number of triangles generated is $\binom{n}{3} = \frac{n(n-1)(n-2)}{6}$.
- The number of parts the plane is divided into is $\frac{n(n+1)}{2} + 1$.
- The number of unbounded parts is $2n$.
