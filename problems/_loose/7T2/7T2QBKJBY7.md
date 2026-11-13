---
tag: 7T2QBKJBY7
kind: problem
type: answer
answer: (-1,-1,-1)\quad;\quad(2+\sqrt{3},-1,2+\sqrt{3})\quad;\quad(2-\sqrt{3},-1,2-\sqrt{3})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=186017
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all triples $(a, b, c)$ of real numbers for which the following holds:

The function $f$ defined for all real numbers $x \neq -c$ by $f(x) = \frac{a x + b}{x + c}$ satisfies the following conditions:

(1) There exist real numbers $x$ for which $f(x)$, $f(f(x))$, and $f(f(f(x)))$ are defined.

(2) For every such number $x$ with $x \neq -1$, it holds that $f(f(f(x))) = \frac{x - 1}{x + 1}$.
