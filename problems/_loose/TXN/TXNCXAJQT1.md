---
tag: TXNCXAJQT1
kind: problem
type: answer
answer: f(x)=\frac{1}{x}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=137347
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f$ defined on the set of positive real numbers, taking positive real values, and satisfying the conditions:
(1) For all positive numbers $x, y, f(x f(y))=y f(x)$;
(2) As $x \rightarrow \infty$, $f(x) \rightarrow 0$.
