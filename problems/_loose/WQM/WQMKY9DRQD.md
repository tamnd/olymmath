---
tag: WQMKY9DRQD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33586
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\xi=\left(\xi_{k}, \mathscr{D}_{k}\right)_{1 \leqslant k \leqslant n}$ and $\eta=\left(\eta_{k}, \mathscr{D}_{k}\right)_{1 \leqslant k \leqslant n}$ be two martingales, $\xi_{1}=\eta_{1}=0$. Prove that

$$
\mathrm{E} \xi_{n} \eta_{n}=\sum_{k=2}^{n} \mathrm{E}\left(\xi_{k}-\xi_{k-1}\right)\left(\eta_{k}-\eta_{k-1}\right)
$$

and, in particular, that

$$
\mathrm{E} \xi_{n}^{2}=\sum_{k=2}^{n} \mathrm{E}\left(\xi_{k}-\xi_{k-1}\right)^{2}
$$
