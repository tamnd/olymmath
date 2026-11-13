---
tag: RSHS7NCNG9
kind: problem
type: answer
answer: f_{n}=\frac{n(n+1)(2n+1)}{12}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=189594
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the functions

$$
f_{n}(x)=\frac{1-\cos x \cos 2 x \ldots \cos n x}{x^{2}}, n \in \mathbb{N}
$$

a) Prove that for every $n \in \mathbb{N}$, $\lim _{x \rightarrow 0} f_{n}(x)=f_{n}$ exists.

b) Determine the relationship between $f_{n}$ and $f_{n-1}$.

c) Calculate $f_{n}$.
