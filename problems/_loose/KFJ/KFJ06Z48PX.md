---
tag: KFJ06Z48PX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33803
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(See [12].) The Lebesgue integral $\mathrm{E} \xi$ is not defined when $\mathrm{E} \xi^{-} = \mathrm{E} \xi^{+} = \infty$ (see B1.II.6, definition 2). Suppose that for all $a, b > 0$ the limit

$$
\overline{\mathrm{E}} \xi = \lim _{n}\left(\mathrm{E}\left[\xi^{+}\right]_{a n} - \mathrm{E}\left[\xi^{-}\right]_{b n}\right),
$$

exists and is independent of $a$ and $b$, where $[x]_{c} = x I(x \leqslant c) + c I(x > c), x, c \geqslant 0$. The quantity $\overline{\mathrm{E}} \xi$ will be called the generalized Lebesgue integral.

Prove that
(a) the integral $\overline{\mathrm{E}} \xi$ exists and is finite if and only if $n \mathrm{P}(|\xi| > n) \rightarrow 0$ and the limit (called the Lebesgue integral in the sense of the principal value)

$$
\widetilde{\mathrm{E}} \xi = \lim _{n} \mathrm{E} \xi I(|\xi| \leqslant n)
$$

exists, and in this case $\widetilde{\mathrm{E}} \xi = \overline{\mathrm{E}} \xi$;

(b) if the integrals $\bar{E} \xi$ and $\bar{E} \eta$ exist, and

$$
(\overline{\mathrm{E}} \xi, \overline{\mathrm{E}} \eta) \notin \{(\infty, -\infty), (-\infty, \infty)\}
$$

then $\overline{\mathrm{E}}(\xi + \eta)$ also exists and

$$
\overline{\mathrm{E}}(\xi + \eta) = \overline{\mathrm{E}} \xi + \overline{\mathrm{E}} \eta
$$

(c) the linearity property, in general, does not hold for the integral in the sense of the principal value $\widetilde{\mathrm{E}}$;

(d) the existence of $\overline{\mathrm{E}} \xi$, in general, does not imply the existence of $\overline{\mathrm{E}} \xi I(\xi \in B) (B-$ Borel set).
