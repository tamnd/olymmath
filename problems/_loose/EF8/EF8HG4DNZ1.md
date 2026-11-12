---
tag: EF8HG4DNZ1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33772
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $X$ be a random variable taking values in the set $\mathbb{Z}_{+}$. Its factorial moments $m_{(n)}$ are defined by the formula

$$
m_{(n)}=\mathrm{E} X(X-1) \ldots(X-n+1)=\mathrm{E}(X)_{n}, n \in \mathbb{N}
$$

Show that for any $n \geqslant 1$ the following statements are true:

(a) if $\mathrm{E} X^{n} < \infty$, then $\mathrm{E}(X)_{n} < \infty$;

(b) if $\mathrm{E}(X)_{n} < \infty$, then $\mathrm{E} X^{n} < \infty$.

(c) if $\mathrm{E} X^{n} < \infty$, then $\mathrm{E}(X)_{n} > 0$.

(d) if $\mathrm{E}(X)_{n} > 0$, then $\mathrm{E} X^{n} > 0$.
