---
tag: Y9FBJCRA9K
kind: problem
type: answer
answer: 2\sqrt{\alpha^{2}+\beta^{2}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=177792
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\alpha, \beta \in \mathbb{R}$. Determine the maximum value of the expression

$$
|\alpha x+\beta y|+|\alpha x-\beta y|
$$

in each of the following cases:
a) $x, y \in \mathbb{R}$, such that $|x| \leq 1$ and $|y| \leq 1$;
b) $x, y \in \mathbb{C}$, such that $|x| \leq 1$ and $|y| \leq 1$.
