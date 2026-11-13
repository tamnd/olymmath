---
tag: K3RDRYQJNX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=189763
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The function $f$ is defined on the set of integers and satisfies the condition

$$
f(x)= \begin{cases}x-10, & x>100 \\ f(f(x+11)), & x \leq 100\end{cases}
$$

Prove that $f(x)=91$ for $x \leq 100$.
