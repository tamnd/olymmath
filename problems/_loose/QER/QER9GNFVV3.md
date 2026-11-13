---
tag: QER9GNFVV3
kind: problem
type: answer
answer: No such function exists.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0001.parquet#row=63
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo
    source: hf-mathnet
    label: Ukraine 58th Ukrainian National Mathematical Olympiad
---
Determine if there exist a function $f : (0; 1) \rightarrow (2018; +\infty)$, so that the following conditions hold:
* $f(x \cdot y) = f(x) \cdot f(y)$ for any $x, y \in (0; 1)$;
* for any $y \in (2018; +\infty)$ there exists $x \in (0; 1)$ such that $f(x) = y$?
