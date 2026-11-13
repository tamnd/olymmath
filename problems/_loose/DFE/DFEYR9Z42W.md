---
tag: DFEYR9Z42W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=121177
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the function $f:[0,1] \rightarrow \mathbf{R}$ satisfy
(1) $f(0)=f(1)=0$;
(2) For all $x, y \in[0,1]$, and $x \neq y,|f(x)-f(y)|<|x-y|$.

Prove: For all $x, y \in[0,1],|f(x)-f(y)|<\frac{1}{2}$.
