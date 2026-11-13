---
tag: YE1G0R3YMY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219677
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f: N \to N$ be a function satisfying
(a) $1\le f(x)-x \le 2019$ $\forall x \in N$
(b) $f(f(x))\equiv x$ (mod $2019$) $\forall x \in N$
Show that $\exists x \in N$ such that $f^k(x)=x+2019 k, \forall k \in N$
