---
tag: RRMT9QVGCC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=74131
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \geq 3$ be a positive integer. On a line, $n$ points $P_{1}, P_{2}, P_{3}, \ldots, P_{n}$ are marked in that order and are equally spaced from each other. Then, each of the points must be painted blue or red such that there do not exist three points $P_{x}, P_{\frac{x+y}{2}}$, and $P_{y}$ painted the same color, where $x+y$ is even.

(a) Show that for $n=8$ there exists a way to color the points $P_{1}, P_{2}, \ldots, P_{8}$ satisfying the given condition.

(b) Show that any coloring for $n=9$ does not satisfy the given condition.
