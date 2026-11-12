---
tag: DJRYXBXJQ3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=23850
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that the sum of the medians of an arbitrary triangle $ABC$ is always less than the perimeter of the triangle and greater than $3/4$ of its perimeter:

$$
2 p > m_{a} + m_{b} + m_{c} > \frac{3}{2} p, \text{ or } 2 > \frac{m_{a} + m_{b} + m_{c}}{p} > 1^{1/2}
$$

Can the (double) inequality

$$
2 > \frac{m_{a} + m_{b} + m_{c}}{p} > 11 / 2
$$

be improved (i.e., is there a number $M < 2$ such that for all triangles $\frac{m_{a} + m_{b} + m_{c}}{p} \leqslant M$)?
