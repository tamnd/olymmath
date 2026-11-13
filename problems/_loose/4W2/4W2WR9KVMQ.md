---
tag: 4W2WR9KVMQ
kind: problem
type: answer
answer: "n"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247338
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a non-zero natural number, $n \ge 5$. Consider $n$ distinct points in the plane, each colored or white, or black. For each natural $k$ , a move of type $k, 1 \le k <\frac {n} {2}$, means selecting exactly $k$ points and changing their color. Determine the values of $n$ for which, whatever $k$ and regardless of the initial coloring, there is a finite sequence of $k$ type moves, at the end of which all points have the same color.
