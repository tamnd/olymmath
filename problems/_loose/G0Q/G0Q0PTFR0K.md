---
tag: G0Q0PTFR0K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161580
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $n$ lines, none of which are parallel and no three of which intersect at the same point. By intersection points, we consider all points where some two of these lines intersect.

(a) Prove that among the given lines, there is one such that on each side of it, there are at least

$$
\left\lfloor\frac{(n-1)(n-2)}{10}\right\rfloor
$$

intersection points (points on that line are not counted).

(b) For which values of $n$ can the estimate from part (a) not be improved?

(Dušan Đukić)
