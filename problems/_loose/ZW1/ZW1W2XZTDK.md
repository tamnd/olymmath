---
tag: ZW1W2XZTDK
kind: problem
type: answer
answer: \frac{n(n-1)(n-2)}{6}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=177637
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a fixed positive integer. The positive integers $a, b$, $c$ and $d$ are less than or equal to $n, d$ is the largest one and they satisfy the equality

$$
(a b+c d)(b c+a d)(a c+b d)=(d-a)^{2}(d-b)^{2}(d-c)^{2}
$$

a) Prove that $d=a+b+c$.

b) Find the number of the quadruples $(a, b, c, d)$ which have the required properties.

Alexander Ivanov
