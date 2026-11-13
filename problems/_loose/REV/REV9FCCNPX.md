---
tag: REV9FCCNPX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=264948
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f(x, y) = \left\lfloor \frac{5x}{2y} \right\rfloor + \left\lceil \frac{5y}{2x} \right\rceil$. Suppose $x, y$ are chosen independently uniformly at random from the interval $(0, 1]$. Let $p$ be the probability that $f(x, y) < 6$. If $p$ can be expressed in the form $m/n$ for relatively prime positive integers $m$ and $n$, compute $m + n$.

(Note: $\lfloor x\rfloor $ is defined as the greatest integer less than or equal to $x$ and $\lceil x \rceil$ is defined as the least integer greater than or equal to$ x$.)
