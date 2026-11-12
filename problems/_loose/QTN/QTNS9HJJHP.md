---
tag: QTNS9HJJHP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33588
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\eta_{1}, \ldots, \eta_{n}$ be a sequence of independent and identically distributed random variables taking values in a (finite) set $Y$. Let $f_{0}(y)=\mathrm{P}\left\{\eta_{1}=y\right\}>0, y \in Y$ and $f_{1}(y)$ be a non-negative function, $\sum_{y \in Y} f_{1}(y)=1$. Show that the sequence
$\xi=\left(\xi, \mathscr{O}^{\eta}\right)$ $\xi=\left(\xi_{k}, \mathscr{D}_{k}^{\eta}\right)_{1 \leqslant k \leqslant n}$,

$$
\xi_{k}=\frac{f_{1}\left(\eta_{1}\right) \ldots f_{1}\left(\eta_{k}\right)}{f_{0}\left(\eta_{1}\right) \ldots f_{0}\left(\eta_{k}\right)}, \mathscr{D}_{k}^{\eta}=\mathscr{D}_{\eta_{1}, \ldots, \eta_{k}},
$$

forms a martingale. (The quantities $\xi_{k}$, called likelihood ratios, play a crucial role in mathematical statistics.)
