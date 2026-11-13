---
tag: NCWV36FF9A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204152
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$2022$ lily pads are arranged in a circle. Each lily pad starts with height $1$. A frog starts on one of the lily pads, and jumps around clockwise as follows: if the frog is on a lily bad of height $k$, the lily pad grows by $1$ (becoming $k+1$), and then the frog jumps $k$ lily pads clockwise (i.e. jumping over $(k-1)$). The frog continues doing this as long as it pleases.

After $n$ jumps, let $D(n)$ be the difference between the tallest lily pad and the shortest lily pad. Find, with proof, the maximum possible value of $D(n)$, or prove that $D(n)$ is unbounded.
