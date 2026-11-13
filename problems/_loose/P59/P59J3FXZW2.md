---
tag: P59J3FXZW2
kind: problem
type: answer
answer: (\frac{OC_{n}}{OC_{0}})^{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=168103
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We divide a convex angle into $n$ equal parts, then intersect it with a straight line, the consecutive intersection points being $C_{0}$, $C_{1}, C_{2}, \ldots, C_{n-1}, C_{n}$. Show that the following ratio is independent of $n$ and $k$.

$$
\left(\frac{1}{C_{0} C_{k}}-\frac{1}{C_{0} C_{n}}\right):\left(\frac{1}{C_{n} C_{n-k}}-\frac{1}{C_{n} C_{0}}\right)
$$
