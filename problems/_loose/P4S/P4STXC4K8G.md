---
tag: P4STXC4K8G
kind: problem
type: answer
answer: \frac{14}{3},-5
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=2218
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
From the first equation, we find:

$$
P=-\frac{x^{2}-x-2}{x-1}=-x+\frac{2}{x-1}, x \neq 1
$$

From the second equation, we find: $p=-\frac{x^{2}+2 x-1}{x+2}=-x+\frac{1}{x+2}, x \neq-2$.

Then, if $x$ is a common root corresponding to the parameter $p$, we have

$$
-x+\frac{2}{x-1}=-x+\frac{1}{x+2}
$$

From which we find $x=-5$ and $p=\frac{14}{3}$.
