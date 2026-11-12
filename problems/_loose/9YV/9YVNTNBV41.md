---
tag: 9YVNTNBV41
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33445
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove the following "inclusion-exclusion" formulas (also known as Poincaré formulas, Poincaré theorems, or Poincaré identities) for the probabilities of the union and intersection of events $ A_{1}, \ldots, A_{n} $: for each $ n \geqslant 1 $, the following equalities hold:

(a) $\mathrm{P}\left(A_{1} \cup \ldots \cup A_{n}\right)=\sum_{1 \leqslant i_{1} \leqslant n} \mathrm{P}\left(A_{i_{1}}\right)-\sum_{1 \leqslant i_{1}<i_{2} \leqslant n} \mathrm{P}\left(A_{i_{1}} \cap A_{i_{2}}\right)+\ldots$

$$
\begin{aligned}
& \ldots+(-1)^{m+1} \sum_{1 \leqslant i_{1}<\ldots<i_{m} \leqslant n} \mathrm{P}\left(A_{i_{1}} \cap \ldots \cap A_{i_{m}}\right)+\ldots \\
& \ldots+(-1)^{n+1} \mathrm{P}\left(A_{1} \cap \ldots \cap A_{n}\right)
\end{aligned}
$$

And

(b) $\mathrm{P}\left(A_{1} \cap \ldots \cap A_{n}\right)=\sum_{1 \leqslant i_{1} \leqslant n} \mathrm{P}\left(A_{i_{1}}\right)-\sum_{1 \leqslant i_{1}<i_{2} \leqslant n} \mathrm{P}\left(A_{i_{1}} \cup A_{i_{2}}\right)+\ldots$

$$
\begin{aligned}
& \ldots+(-1)^{m+1} \sum_{1 \leqslant i_{1}<\ldots<i_{m} \leqslant n} \mathrm{P}\left(A_{i_{1}} \cup \ldots \cup A_{i_{m}}\right)+\ldots \\
& \ldots+(-1)^{n+1} \mathrm{P}\left(A_{1} \cup \ldots \cup A_{n}\right) .
\end{aligned}
$$

Remark. Formulas (a) and (b) can be briefly written as

$$
\mathrm{P}\left(\bigcup_{i=1}^{n} A_{i}\right)=\sum_{m=1}^{n}(-1)^{m+1} S_{m}, \mathrm{P}\left(\bigcap_{i=1}^{n} A_{i}\right)=\sum_{m=1}^{n}(-1)^{m+1} \widetilde{S}_{m}
$$

where

$$
S_{m}=\sum_{1 \leqslant i_{1}<\ldots<i_{m} \leqslant n} \mathrm{P}\left(A_{i_{1}} \cap \ldots \cap A_{i_{m}}\right), \widetilde{S}_{m}=\sum_{1 \leqslant i_{1}<\ldots<i_{m} \leqslant n} \mathrm{P}\left(A_{i_{1}} \cup \ldots \cup A_{i_{m}}\right)
$$
