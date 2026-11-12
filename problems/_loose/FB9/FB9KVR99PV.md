---
tag: FB9KVR99PV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33994
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The statement of Egorov's theorem makes it natural to introduce the following concept. A sequence of measurable functions $\left\{f_{n}\right\}_{n \geqslant 1}$ on a space $(\Omega, \mathscr{F}, \mu)$ with finite measure $\mu$ is said to converge almost uniformly to a function $f$ if for every $\varepsilon>0$ there exists a set $A_{\varepsilon} \in \mathscr{F}$ with $\mu\left(A_{\varepsilon}\right)<\varepsilon$ such that $f_{n}(\omega) \rightarrow f(\omega)$ uniformly for all $\omega \in \bar{A}_{\varepsilon}$ (notation: $f_{n} \rightrightarrows f$).

Show that from the almost uniform convergence $f_{n} \rightrightarrows f$ it follows that the convergence in measure $f_{n} \xrightarrow{\mu} f$ and the convergence almost everywhere $f_{n} \xrightarrow{\mu \text {-a.e. }} f$ also hold.
