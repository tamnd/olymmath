---
tag: 2FTAXWKT6A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33970
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose that $\zeta_{n} \xrightarrow{d} c$, where $c$ is a constant. Prove that then $\zeta_{n} \xrightarrow{p} c$.

Show also that if $\xi_{n} \xrightarrow{d} \xi$ for some $\xi, \xi_{1}, \xi_{2} \ldots$, then $\left(\xi_{n}, \zeta_{n}\right) \xrightarrow{d}(\xi, c)$, i.e., for any continuous bounded function $f$ the condition

$$
\mathrm{E} f\left(\xi_{n}, \zeta_{n}\right) \rightarrow \mathrm{E} f(\xi, c)
$$

holds. In particular, $\xi_{n} \zeta_{n} \xrightarrow{d} c \xi$.
