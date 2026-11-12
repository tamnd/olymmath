---
tag: 71DMTN0XHS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=2467
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Rewrite the original equation

$$
\log _{2}\left(\frac{x}{17}+\frac{y}{5}\right)=\log _{2} \frac{x}{17}+\log _{2} \frac{y}{5}
$$

as

$$
\log _{2}\left(\frac{x}{17}+\frac{y}{5}\right)=\log _{2} \frac{x y}{85}
$$

From this, we get $\frac{x}{17}+\frac{y}{5}=\frac{x y}{85}$ or $5 x+17 y=x y$. We can rewrite the last equation as

$$
(x-17)(y-5)=85
$$

We consider the possible cases

| $x-17$ | 1 | 5 | 17 | 85 | -1 | -5 | -17 | -85 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $y-5$ | 85 | 17 | 5 | 1 | -85 | -17 | -5 | -1 |
| $x$ | 18 | 22 | 34 | 102 | 16 | 12 | 0 | -68 |
| $y$ | 90 | 22 | 10 | 6 | -80 | -12 | 0 | 4 |

By selecting the natural solutions, we get the answer.
