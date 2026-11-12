---
tag: Q7B1N7KDK6
kind: problem
type: answer
answer: \frac{1-\cos2}{2^{2}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34093
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(Drier.) Let $(\xi, \eta)$ be a random vector uniformly distributed on the set

$$
A=\left\{(x, y) \in[-1,1]^{2}: \frac{x}{y}>1 \text { or } \frac{y}{x}<-1\right\}
$$

Show that the random variables $\xi$ and $\eta$ are dependent, uniformly distributed on $[-1,1]$, but

$$
\varphi_{\xi+\eta}(t)=\varphi_{\xi}(t) \varphi_{\eta}(t), \varphi_{\xi-\eta}(t)=\varphi_{\xi}(t) \varphi_{\eta}(-t), t \in \mathbb{R}
$$
