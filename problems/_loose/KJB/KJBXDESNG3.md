---
tag: KJBXDESNG3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33513
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Show that random variables $\xi_{1}, \ldots, \xi_{n}$ are independent if and only if for all $x_{1}, \ldots, x_{n}$ the equality

$$
F_{\xi_{1}, \ldots, \xi_{n}}\left(x_{1}, \ldots, x_{n}\right)=F_{\xi_{1}}\left(x_{1}\right) \ldots F_{\xi_{n}}\left(x_{n}\right)
$$

holds, where

$$
F_{\xi_{1}, \ldots, \xi_{n}}\left(x_{1}, \ldots, x_{n}\right)=\mathrm{P}\left\{\xi_{1} \leqslant x_{1}, \ldots, \xi_{n} \leqslant x_{n}\right\}
$$
