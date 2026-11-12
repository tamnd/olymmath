---
tag: MH632WQHT2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33701
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\left\{X_{\alpha}\right\}$ be a family of extended random variables, where $\alpha$ runs through an arbitrary set of indices. Prove that one can select a countable subset $\left\{Y_{n}\right\} \subseteq\left\{X_{\alpha}\right\}$ such that

$$
\mathrm{P}\left(\sup _{n} Y_{n} \leqslant X\right)=1 \Rightarrow \mathrm{P}\left(X_{\alpha} \leqslant X\right)=1 \text { for all } \alpha \text {. }
$$

The quantity ess $\sup _{\alpha} X_{\alpha}$, called the essential supremum of the variables $X_{\alpha}$, is usually defined as $\sup _{n} Y_{n}$. Establish that such a definition is correct up to sets of $\mathrm{P}$-measure zero.

Remark. Similarly, ess $\inf _{\alpha} X_{\alpha}$ is defined.
