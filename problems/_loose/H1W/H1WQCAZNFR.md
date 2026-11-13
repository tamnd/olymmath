---
tag: H1WQCAZNFR
kind: problem
type: answer
answer: \left( \frac{1}{2}, \frac{\sqrt{3}}{2} \right)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212514
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For real numbers $a,\ b$, define a point $P_n(x_n,\ y_n)$ by
$$(x_0,\ y_0)=(1,\ 0)$$

$$(x_{n+1},\ y_{n+1})=(ax_n-by_n,\ bx_n+ay_n)\ \ (n=0,\ 1,\ 2,\ \cdots).$$

Find all of $(a,\ b)$ satisfying the following conditions (i) and (ii).

(i) $P_0=P_6$

(ii) All of $P_0,\ P_1,\ P_2,\ P_3,\ P_4,\ P_5$ are distinct.
