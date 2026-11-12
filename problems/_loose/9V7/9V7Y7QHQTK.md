---
tag: 9V7Y7QHQTK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=24685
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Output the formula for solving the quadratic equation

$$
a x^{2}+b x+c=0
$$

$(a, b$ and $c-p$-adic numbers, $a \neq 0)$.

Now let's try to find a way to extract the root of $p$-adic numbers. It is sufficient to consider the extraction of the root from integers. If the number has $k$ digits after the decimal point, then we proceed as follows: multiply it by $p^{2 k}$ (the number becomes an integer), then extract the root and divide the result by $p^{k}$.
