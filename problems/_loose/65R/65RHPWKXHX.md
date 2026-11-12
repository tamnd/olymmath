---
tag: 65RHPWKXHX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33845
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $g=g(x)$ be a concave Borel function defined on $\mathbb{R}$ such that $\mathrm{E}|g(\xi)|<\infty$. Show that for conditional expectations a.s. the Jensen's inequality holds:

$$
g(\mathrm{E}[\xi \mid \mathscr{G}]) \leqslant \mathrm{E}[g(\xi) \mid \mathscr{G}]
$$

and, therefore,

$$
g(\mathrm{E} \xi) \leqslant \mathrm{E} g(\mathrm{E}[\xi \mid \mathscr{G}]) \leqslant \mathrm{E} g(\xi)
$$

Remark. For a strictly concave function $g$ we have

$$
\begin{aligned}
& g(\mathrm{E} \xi)=\mathrm{E} g(\mathrm{E}[\xi \mid \mathscr{G}]) \Leftrightarrow \mathrm{E} \xi=\mathrm{E}[\xi \mid \mathscr{G}] \text { a.s., } \\
& \mathrm{E} g(\mathrm{E}[\xi \mid \mathscr{G}])=\mathrm{E} g(\xi) \Leftrightarrow \xi=\mathrm{E}[\xi \mid \mathscr{G}] \text { a.s. }
\end{aligned}
$$

If the $\sigma$-algebra $\mathscr{G}$ is completed with all null sets, then

$$
\mathrm{E} g(\mathrm{E}[\xi \mid \mathscr{G}])=\mathrm{E} g(\xi) \Leftrightarrow \xi \text { is a } \mathscr{G} \text{-measurable random variable }
$$
