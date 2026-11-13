---
tag: ST6VNZ3PAJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h2024428
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28882
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228892
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2008 Tournament Of Towns
---
A polynomial $x^n + a_1x^{n-1} + a_2x^{n-2} +... + a_{n-2}x^2 + a_{n-1}x + a_n$ has $n$ distinct real roots $x_1, x_2,...,x_n$ , where $n > 1$ . The polynomial $nx^{n-1}+ (n - 1)a_1x^{n-2} + (n - 2)a_2x^{n-3} + ...+ 2a_{n-2}x + a_{n-1}$ has roots $y_1, y_2,..., y_{n_1}$ .
Prove that $\frac{x^2_1+ x^2_2+ ...+ x^2_n}{n}>\frac{y^2_1 + y^2_2 + ...+ y^2_{n-1}}{n - 1}$
