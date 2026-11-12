---
tag: RY5CGBB2A3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33589
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We will say that the sequence

$$
\xi=\left(\xi_{k}, \mathscr{D}_{k}\right)_{0 \leqslant k \leqslant n}
$$

is a supermartingale (submartingale) if the inequality

$$
\mathrm{E}\left(\xi_{k+1} \mid \mathscr{D}_{k}\right) \leqslant \xi_{k} \left(\geqslant \xi_{k}\right), 0 \leqslant k \leqslant n
$$

holds $\mathrm{P}-$ a.s.

Show that every supermartingale (submartingale) can be represented (and in a unique way) in the form

$$
\xi_{k}=m_{k}-a_{k} \left(+a_{k}\right)
$$

where $m=\left(m_{k}, \mathscr{D}_{k}\right)_{0 \leqslant k \leqslant n}$ is a martingale, and $a=\left(a_{k}, \mathscr{D}_{k}\right)_{0 \leqslant k \leqslant n}$ is a non-decreasing sequence such that $a_{0}=0$ and the values $a_{k}$ are $\mathscr{D}_{k-1}$-measurable for every $k \geqslant 1$.
