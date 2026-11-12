---
tag: A44Y1FH3PY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Olympic Revenge
    url: https://artofproblemsolving.com/community/c6h482051
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8402
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: olympic-revenge/2012
    source: hf-ai-mo-aops
    label: 2012 Olympic Revenge
---
We define $(x_1, x_2, \ldots , x_n) \Delta (y_1, y_2, \ldots , y_n) = \left( \sum_{i=1}^{n}x_iy_{2-i}, \sum_{i=1}^{n}x_iy_{3-i}, \ldots , \sum_{i=1}^{n}x_iy_{n+1-i} \right)$ , where the indices are taken modulo $n$ .

Besides this, if $v$ is a vector, we define $v^k = v$ , if $k=1$ , or $v^k = v \Delta v^{k-1}$ , otherwise.

Prove that, if $(x_1, x_2, \ldots , x_n)^k = (0, 0, \ldots , 0)$ , for some natural number $k$ , then $x_1 = x_2 = \ldots = x_n = 0$ .
