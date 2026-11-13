---
tag: RQJV6QY6XQ
kind: problem
type: answer
answer: f(x)=x+1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=142567
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove: There is exactly one function $f$ defined on all non-zero real numbers that satisfies the conditions:
(1) For any $x \in \mathrm{R}, f(x)=x f\left(\frac{1}{x}\right)$;
(2) For all pairs of non-zero real numbers $(x, y)$ where $x \neq -y$, $f(x)+f(y)=1 + f(x+y)$.
