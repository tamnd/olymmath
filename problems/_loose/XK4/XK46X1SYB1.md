---
tag: XK46X1SYB1
kind: problem
type: answer
answer: \sum_{n \geq 2} (a_n + b_n) \binom{n}{2} = \binom{N}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220789
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$N$ straight lines are drawn on a plane. The $N$ lines can be partitioned into set of lines such that if a line $l$ belongs to a partition set then all lines parallel to $l$ make up the rest of that set. For each $n>=1$,let $a_n$ denote the number of partition sets of size $n$. Now that $N$ lines intersect at certain points on the plane. For each $n>=2$ let $b_n$ denote the number of points that are intersection of exactly $n$ lines. Show that
$\sum_{n>= 2}(a_n+b_n)$$\binom{n}{2}$ $=$ $\binom{N}{2}$
