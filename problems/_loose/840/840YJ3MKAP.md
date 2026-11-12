---
tag: 840YJ3MKAP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34083
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\varphi=\varphi(t)$ be the characteristic function of a random variable $X$.

(a) Show that $\mathrm{E}|X|^{p}<\infty$ for a given $p, 0<p<2$, if and only if

$$
\int_{\mathbb{R}} \frac{1-\operatorname{Re} \varphi(t)}{|t|^{1+p}} d t<\infty
$$

and in this case

$$
\mathrm{E}|X|^{p}=C_{p} \int_{\mathbb{R}} \frac{1-\operatorname{Re} \varphi(t)}{|t|^{1+p}} d t,
$$

where

$$
C_{p}=\left[\int_{\mathbb{R}} \frac{1-\cos t}{|t|^{1+p}} d t\right]^{-1}=\frac{\Gamma(1+p)}{\pi} \sin \frac{p \pi}{2} .
$$

(b) Establish that if $\mathrm{E}|X|<\infty$, then

$$
\mathrm{E}|X|=-(\mathrm{R}) \int_{\mathbb{R}} \frac{\operatorname{Re} \varphi^{\prime}(t)}{\pi t} d t
$$

where $(\mathrm{R}) \int_{\mathbb{R}}$ is the improper Riemann integral.
