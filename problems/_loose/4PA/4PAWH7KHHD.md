---
tag: 4PAWH7KHHD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34080
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(a) Show that the function

$$
f(x)=\frac{1-\cos x}{\pi x^{2}}=\frac{1}{2 \pi}\left[\frac{\sin (x / 2)}{x / 2}\right]^{2}, x \in \mathbb{R}
$$

is the density of some probability distribution. The characteristic function corresponding to $f$ is

$$
\varphi(t)= \begin{cases}1-|t|, & |t| \leqslant 1 \\ 0, & |t|>1\end{cases}
$$

(b) Using the reflection formula for the gamma function

$$
\Gamma(1-z) \Gamma(z)=\frac{\pi}{\sin (\pi z)}, z \in \mathbb{R}
$$

show that the probability densities

$$
f(x)=\frac{1}{\pi \operatorname{ch} x} \text { and } g(x)=\frac{1}{2 \operatorname{ch}^{2} x}, x \in \mathbb{R}
$$

have characteristic functions

$$
\varphi(t)=\frac{1}{\operatorname{ch} \frac{\pi t}{2}} \phi(t)=\frac{\pi t}{2 \operatorname{sh} \frac{\pi t}{2}} .
$$

(c) Find the distributions corresponding to the characteristic functions of the form

$$
\frac{1}{1-i t}, \frac{1}{1+t^{2}}, \cos t, \frac{1}{2-\cos t}
$$
