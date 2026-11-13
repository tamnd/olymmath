---
tag: VNZTX4J5SZ
kind: problem
type: answer
answer: f(x) = x + 1, g(x) = 1/x
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0001.parquet#row=214
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo
    source: hf-mathnet
    label: Mongolia Mongolian Mathematical Olympiad
---
Let $\mathbb{R}_{>0} = \{x \in \mathbb{R} \mid x > 0\}$ denote the set of positive real numbers.
Find all pairs $f, g: \mathbb{R}_{>0} \to \mathbb{R}_{>0}$ of functions satisfying
$$
f(g(x)) = f(x)g(x), f(x) = x(1 + g(x))
$$
and such that the sequence $g(x), g(g(x)), g(g(g(x))), \dots$ takes finitely many different values for all $x \in \mathbb{R}_{>0}$.
