---
tag: T29CE6ADZ9
kind: problem
type: answer
answer: \frac{1}{3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161131
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For natural numbers $m$ and $n$, where $m<n$, it holds that

$$
\left(\frac{m}{n}\right)^{3}=\overline{0, x y z x y z x y z \ldots}
$$

where $x, y$, and $z$ are some digits (not necessarily distinct), and the block $\overline{x y z}$ repeats periodically infinitely many times. Determine all possible values for $\frac{m}{n}$.
