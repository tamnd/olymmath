---
tag: SN94QX5NS4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=180
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On the set $A = [0, \infty)$, of all nonnegative real numbers, we consider three functions $f, g, h : A \to A$ and the binary operation $*: A \times A \to A$, defined by
$$
x * y = f(x) + g(y) + h(x) \cdot |x - y|, \text{for any } x, y \ge 0.
$$
If $(A, *)$ is a commutative monoid:
a) show that the function $h$ is continuous on $A$;
b) determine the functions $f, g, h$.
