---
tag: RX5FRQHB6Q
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1990 IMO Longlists
    url: https://artofproblemsolving.com/community/c6h367398
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=24997
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ill/1990
    source: hf-ai-mo-aops
    label: 1990 IMO Longlists
---
Let function $f : \mathbb Z_{\geq 0}^0 \to \mathbb N$ satisfy the following conditions:

(i) $ f(0, 0, 0) = 1;$ (ii) $f(x, y, z) = f(x - 1, y, z) + f(x, y - 1, z) + f(x, y, z - 1);$ (iii) when applying above relation iteratively, if any of $x', y', z$ ' is negative, then $f(x', y', z') = 0.$ Prove that if $x, y, z$ are the side lengths of a triangle, then $\frac{\left(f(x,y,z) \right) ^k}{ f(mx ,my, mz)}$ is not an integer for any integers $k, m > 1.$
