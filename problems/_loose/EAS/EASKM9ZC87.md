---
tag: EASKM9ZC87
kind: problem
type: answer
answer: \frac{\sqrt{3}}{3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=266540
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Tom is chasing Jerry on the coordinate plane. Tom starts at $(x, y)$ and Jerry starts at $(0, 0)$. Jerry moves to the right at $1$ unit per second. At each positive integer time $t$, if Tom is within $1$ unit of Jerry, he hops to Jerry's location and catches him. Otherwise, Tom hops to the midpoint of his and Jerry's location.

*Example. If Tom starts at $(3, 2)$, then at time $t = 1$ Tom will be at $(2, 1)$ and Jerry will be at $(1, 0)$. At $t = 2$ Tom will catch Jerry.*

Assume that Tom catches Jerry at some integer time $n$.
(a) Show that $x \geq 0$.
(b) Find the maximum possible value of $\frac{y}{x+1}$.
