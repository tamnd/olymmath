---
tag: 6GSVQ9PKC6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268649
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose $f$ is a function defined over the real numbers that only outputs real numbers, where for all real numbers $x$ and $y$ the following conditions hold:
$$f(1 - x^2) = 1 - x^2$$
$$f(x^2 + y^2 + 2)- f(x^2 + 1)f(y^2 + 1) = f(x^2 + 1) + f(y^2 + 1)$$
$$f(y^2) \ge 0$$
Then $\sum^8_{n=0} f\left(n - \frac12 \right)$ can be written as $a\sqrt{b}- c$, where $a$, $b$, and $c$ are positive integers and $b$ is not divisible by the square of any prime. Find $a + b + c$.
