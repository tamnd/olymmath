---
tag: 8YTA48QP8E
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=103449
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(Mathematics for Middle School, Issue 1, 2004, Olympiad Problem) Given $ n (n > 3) $ points in a plane, where no three points are collinear. Connect some of these points with line segments (these line segments are called edges), resulting in $ x $ edges.
(1) If it is ensured that the graph contains a triangle with the given points as vertices, prove that: $ x \geqslant \frac{n(n-1)(n-2)+3}{3(n-2)} $. When $ \frac{n(n-1)(n-2)+3}{3(n-2)} $ is an integer, find all values of $ n $ and the corresponding minimum value of $ x $.
(2) If it is ensured that the graph contains a complete graph of order $ m (m < n) $ with the given points as vertices, prove that: $ x \geqslant \frac{C_{n}^{m}\left(C_{m}^{2}-1\right)+1}{C_{m-2}^{m-2}} $.
