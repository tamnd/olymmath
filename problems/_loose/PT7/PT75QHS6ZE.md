---
tag: PT75QHS6ZE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33595
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\xi=\left(\xi_{n}, \mathbb{H}, \mathbb{P}\right)$ and $\widetilde{\xi}=\left(\widetilde{\xi}_{n}, \widetilde{\mathbb{H}}, \mathbb{P}\right)$ be two Markov chains with different initial distributions $\mathbb{H}=\left(p_{1}, \ldots, p_{r}\right)$ and $\widetilde{\mathbb{H}}=\left(\widetilde{p}_{1}, \ldots, \widetilde{p}_{r}\right)$. Let

$$
\mathbb{H}^{(n)}=\left(p_{1}^{(n)}, \ldots, p_{r}^{(n)}\right), \widetilde{\mathbb{H}}^{(n)}=\left(\widetilde{p}_{1}^{(n)}, \ldots, \widetilde{p}_{r}^{(n)}\right) .
$$

Show that if $\min _{i, j} p_{i j} \geqslant \varepsilon>0$, then

$$
\sum_{i=1}^{r}\left|\widetilde{p}_{i}^{(n)}-p_{i}^{(n)}\right| \leqslant 2(1-r \varepsilon)^{n}
$$
