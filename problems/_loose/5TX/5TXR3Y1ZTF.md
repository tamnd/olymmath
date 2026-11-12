---
tag: 5TXR3Y1ZTF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33530
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f=f(x)$ be a non-negative even function, non-decreasing for positive values of $x$. Show that for a random variable $\xi=\xi(\omega)$ with $|\xi(\omega)| \leqslant C$, where $C>0$, the following lower bound estimate holds:

$$
\mathrm{P}\{|\xi| \geqslant \varepsilon\} \geqslant \frac{\mathrm{E} f(\xi)-f(\varepsilon)}{f(C)}
$$

In particular, for $f(x)=x^{2}$, the following estimate holds:

$$
\frac{\mathrm{D} \xi-\varepsilon^{2}}{C^{2}} \leqslant \mathrm{P}\{|\xi-E \xi| \geqslant \varepsilon\} \left(\leqslant \frac{\mathrm{D} \xi}{\varepsilon^{2}}\right)
$$
