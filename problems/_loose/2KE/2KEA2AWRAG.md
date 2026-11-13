---
tag: 2KEA2AWRAG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=264041
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In this problem, a *simple polygon* is a polygon that does not intersect itself and has no holes, and a *side* of a polygon is a maximal set of collinear, consecutive line segments in the polygon. In particular, we allow two or more consecutive vertices in a simple polygon to be identical, and three or more consecutive vertices in a simple polygon to be collinear. By convention, polygons must have at least three sides. A simple polygon is *convex* if every one of its interior angles is $180^\circ$ degrees or less. A simple polygon is concave if it is not *convex*.

Let P be the plane. Prove or disprove each of the following statements:

$(a)$ There exists a function $f : P \to P$ such that for all positive integers $n \geq 4$, if $v_1, v_2, \ldots , v_n$ are
the vertices of a simple concave $n$-sided polygon in some order, then $f(v_1), f(v_2), \ldots, f(v_n)$ are the
vertices of a simple convex polygon in some order (which may or may not have $n$ sides).

$(b)$ There exists a function $f : P \to P$ such that for all positive integers $n \geq 4$, if $v_1, v_2, \ldots , v_n$ are
the vertices of a simple convex $n$-sided polygon in some order, then $f(v_1), f(v_2), \ldots, f(v_n)$ are the
vertices of a simple concave polygon in some order (which may or may not have $n$ sides).
