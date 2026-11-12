---
tag: RRHBXAN7TX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33995
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove Lusin's theorem.

Any $\overline{\mathscr{B}}[a, b]$-measurable function $f=f(x)$ on $[a, b]$ can be made continuous by removing suitable open intervals from $[a, b]$ with arbitrarily small total length.

From this, deduce that for any $\varepsilon>0$ there exists a continuous function $f_{\varepsilon}=f_{\varepsilon}(x)$ such that

$$
\lambda\left(x \in[a, b]: f(x) \neq f_{\varepsilon}(x)\right)<\varepsilon
$$

where $\lambda$ is the Lebesgue measure. Moreover, it can be guaranteed that

$$
\sup _{x \in[a, b]}\left|f_{\varepsilon}(x)\right| \leqslant \sup _{x \in[a, b]}|f(x)| \text {. }
$$
