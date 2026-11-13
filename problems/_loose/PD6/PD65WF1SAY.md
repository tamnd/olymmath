---
tag: PD65WF1SAY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220293
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
With expressions containing the symbol $*$, the following transformations can be performed:
1) rewrite the expression in the form $x * (y * z) as ((1 * x) * y) * z$;
2) rewrite the expression in the form $x * 1$ as $x$.
Conversions can only be performed with an integer expression, but not with its parts.
For example, $(1 *1) * (1 *1)$ can be rewritten according to the first rule as $((1 * (1 * 1)) * 1) * 1$ (taking $x = 1 * 1$, $y = 1$ and $z = 1$), but not as $1 * (1 * 1)$ or $(1* 1) * 1$ (in the last two cases, the second rule would be applied separately to the left or right side $1 * 1$).
Find all positive integers $n$ for which the expression $\underbrace{1 * (1 * (1 * (...* (1 * 1)...))}_{n units}$
it is possible to lead to a form in which there is not a single asterisk.

Note. The expressions $(x * y) * $z and $x * (y * z)$ are considered different, also, in the general case, the expressions $x * y$ and $y * x$ are different.
