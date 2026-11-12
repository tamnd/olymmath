---
tag: VYY514FYBH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33821
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(See [100].) Let the random variable $\xi$ have a unimodal distribution density with a maximum at the point $m=0$, which is non-decreasing to the left and non-increasing to the right of $m$. Such a point of maximum is called the mode or peak of the distribution.

(a) Let $g$ be an even function that is increasing on $\mathbb{R}_{+}$, and let $g(0)=0$. Show that for any $\varepsilon>0$ the inequality

$$
\mathbf{P}(|\xi|>\varepsilon) \leqslant\left(\inf _{x>\varepsilon} \frac{1}{x-\varepsilon} \int_{0}^{x} g(z) d z\right)^{-1} \mathrm{E} g(\xi) .
$$

In particular, for $g(x)=x^{2}$, the Gauss inequality holds:

$$
\mathrm{P}(|\xi|>\varepsilon) \leqslant \frac{4}{9} \frac{\mathrm{E} \xi^{2}}{\varepsilon^{2}}
$$

(b) Now let $m$ be different from zero. Show that the inequality $(*)$ remains valid for all sufficiently large $\varepsilon>0$.
