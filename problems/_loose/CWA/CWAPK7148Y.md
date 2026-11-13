---
tag: CWAPK7148Y
kind: problem
type: answer
answer: a \in \left(\frac{2}{7\pi}, \frac{2}{3\pi}\right) \text{ or } a = -\frac{2}{5\pi}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212515
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a$ be a real number, define functions $f(x),\ g(x)$ defined on $x>0$ as follows.
$$f(x)=\frac{\cos x}{x}$$
$$g(x)=\sin x+ax$$

Find all possible $a$ such that graphs of $y=f(x)$ and $y=g(x)$ intersect exactly three points on $x>0$.
