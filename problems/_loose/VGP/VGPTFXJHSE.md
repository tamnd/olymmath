---
tag: VGPTFXJHSE
kind: problem
type: answer
answer: f(x) = x
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=254397
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all functions $f:\mathbb{R}\rightarrow \mathbb{R}$ such that the set
$$\left \{ \frac{f(x)}{x}: x \neq 0 \textnormal{ and } x \in \mathbb{R}\right \}$$
is finite, and for all $x \in \mathbb{R}$
$$f(x-1-f(x)) = f(x) - x - 1$$
