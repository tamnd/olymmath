---
tag: DYB5JYRACQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=186234
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a$ be any real number with $a \geq 2$. Determine all functions that satisfy the following conditions (1), (2), (3) for $a$:

(1) The function $f$ is defined for all non-negative integers $x$; all function values $f(x)$ are real numbers.

(2) For all non-negative integers $x, y$ with $x \geq y$, the following holds:

$$
f(x) \cdot f(y) = f(x+y) + f(x-y)
$$

(3) It holds that $f(1) = a$.

Note: $f$ should be given as an elementary function in closed form, i.e.:

The formulaic specification of the function values $f(x)$ should be achieved by applying arithmetic operations (addition, subtraction, multiplication, division) to $x$ and constants, power functions, exponential functions, trigonometric functions of $x$, or inverse functions of such functions, and this should be done in a number of application steps that is independent of $x$.
