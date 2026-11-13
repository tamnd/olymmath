---
tag: JYYRR900HB
kind: problem
type: answer
answer: \frac{\pi}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242107
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ x_n = \int_0^{\frac {\pi}{2}} \sin ^ n \theta \ d\theta \ (n = 0,\ 1,\ 2,\ \cdots)$.

(1) Show that $ x_n = \frac {n - 1}{n}x_{n - 2}$.

(2) Find the value of $ nx_nx_{n - 1}$.

(3) Show that a sequence $ \{x_n\}$ is monotone decreasing.

(4) Find $ \lim_{n\to\infty} nx_n^2$.
