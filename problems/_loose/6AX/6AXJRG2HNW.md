---
tag: 6AXJRG2HNW
kind: problem
type: answer
answer: f(\sin \theta) = a_0 + \frac{a_1}{2} + \frac{a_2}{3} + \cdots + \frac{a_n}{n+1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207925
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(1) Let $ f(x)$ be a continuous function defined on $ [a,\ b]$, it is known that there exists some $ c$ such that

$$ \int_a^b f(x)\ dx = (b - a)f(c)\ (a < c < b)$$

Explain the fact by using graph. Note that you don't need to prove the statement.

(2) Let $ f(x) = a_0 + a_1x + a_2x^2 + \cdots\cdots + a_nx^n$,

Prove that there exists $ \theta$ such that

$$ f(\sin \theta) = a_0 + \frac {a_1}{2} + \frac {a_3}{3} + \cdots\cdots + \frac {a_n}{n + 1},\ 0 < \theta < \frac {\pi}{2}.$$
