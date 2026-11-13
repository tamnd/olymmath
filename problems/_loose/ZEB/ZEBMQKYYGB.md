---
tag: ZEBMQKYYGB
kind: problem
type: answer
answer: 1+\sum_{i=1}^{[\frac{n}{2}]}C_{n}^{2i}(2i-1)!!
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=103631
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If $f: X \rightarrow X$ satisfies $f(f(x))=x$ (for all $x \in X$), then $f$ is called an involution. Let $|X|=n$, find the number of involutions from $X \rightarrow X$.
