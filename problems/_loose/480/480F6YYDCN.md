---
tag: 480F6YYDCN
kind: problem
type: answer
answer: b+
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91439
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f, g$ be two polynomials with integer coefficients and let $a, b$ be integer fixed points of $f \circ g$. Prove that integer fixed points $c, d$ of $g \circ f$ exist with $a+c=b+d$.

Note: For two polynomials $p, q$, $p \circ q$ is defined by $(p \circ q)(x)=p(q(x))$.
