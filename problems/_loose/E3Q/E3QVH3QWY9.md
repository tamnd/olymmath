---
tag: E3QVH3QWY9
kind: problem
type: answer
answer: "0.49"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=181436
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For each positive integer $n$, we call $f(n)$ the product of all odd natural numbers less than or equal to $2n+1$ (for example, $f(4)=1 \cdot 3 \cdot 5 \cdot 7 \cdot 9$). We then set $g(n)=\frac{n}{f(n)}$. What can be said about the sum $S=g(1)+g(2)+\cdots+g(30)$?
(A) $S \leq 0.35$
(B) $0.35 < S \leq 0.45$
(C) $0.45 < S \leq 0.51$
(D) $S > 0.51$
