---
tag: XYK05WD0Z1
kind: problem
type: answer
answer: \frac{2n^2}{n+1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242563
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let there be $2n$ positive reals $a_1,a_2,...,a_{2n}$. Let $s = a_1 + a_3 +...+ a_{2n-1}$, $t = a_2 + a_4 + ... + a_{2n}$, and
$x_k = a_k + a_{k+1} + ... + a_{k+n-1}$ (indices are taken modulo $2n$). Prove that
$$\frac{s}{x_1}+\frac{t}{x_2}+\frac{s}{x_3}+\frac{t}{x_4}+...+\frac{s}{x_{2n-1}}+\frac{t}{x_{2n}}>\frac{2n^2}{n+1}$$
