---
tag: 6TM0NCWFJD
kind: problem
type: answer
answer: "12345"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=160542
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S$ be the set of all non-zero real-valued functions $f$ defined on the set of all real numbers such that
$$
\mathrm{f}\left(x^{2}+y f(z)\right)=x \mathrm{f}(x)+z \mathrm{f}(y)
$$
for all real numbers $x, y$ and $z$. Find the maximum value of $\mathrm{f}(12345)$, where $\mathrm{f} \in S$.
