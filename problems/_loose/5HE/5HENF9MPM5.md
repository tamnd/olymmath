---
tag: 5HENF9MPM5
kind: problem
type: answer
answer: -\frac{1}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206412
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ f(x) = e^{(p + 1)x} - e^x$ for real number $ p > 0$. Answer the following questions.

(1) Find the value of $ x = s_p$ for which $ f(x)$ is minimal and draw the graph of $ y = f(x)$.

(2) Let $ g(t) = \int_t^{t + 1} f(x)e^{t - x}\ dx$. Find the value of $ t = t_p$ for which $ g(t)$ is minimal.

(3) Use the fact $ 1 + \frac {p}{2}\leq \frac {e^p - 1}{p}\leq 1 + \frac {p}{2} + p^2\ (0 < p\leq 1)$ to find the limit $ \lim_{p\rightarrow +0} (t_p - s_p)$.
