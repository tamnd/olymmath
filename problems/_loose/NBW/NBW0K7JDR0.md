---
tag: NBW0K7JDR0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33819
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $X$ and $Y$ be non-negative random variables for which there exist $\alpha > 1$ and $\beta > 0$ such that for all $x > 0$ the inequality

$$
\mathrm{P}(X > \alpha x, Y \leqslant x) \leqslant \beta \mathrm{P}(X > x)
$$

holds. Let also $f$ be a non-negative increasing function, $f(0) = 0$, and

$$
L_{f}(\alpha) := \sup _{x > 0} \frac{f(\alpha x)}{f(x)} < \frac{1}{\beta}
$$

Prove that

$$
\mathrm{E} f(X) \leqslant \frac{L_{f}(\alpha)}{1 - \beta L_{f}(\alpha)} \cdot \mathrm{E} f(Y)
$$

in the case of finiteness of $\mathrm{E} f(X)$ and $\mathrm{E} f(Y)$.
