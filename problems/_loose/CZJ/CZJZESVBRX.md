---
tag: CZJZESVBRX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34092
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(a) (Barr, Esseen.) Let $\varphi=\varphi(t)$ be the characteristic function of a random variable $\xi$. Show that for any $t \neq 0$ the following inequalities hold:

$$
\begin{aligned}
& \left|\frac{1-\varphi(t)}{t^{p}}\right| \leqslant C_{p} \mathrm{E}|\xi|^{p}, 0 < p \leqslant 2, \\
& \left|\frac{1-\varphi(t)}{t^{2}}\right| \leqslant C_{2} \mathrm{E}|\xi|^{2}, p=2,
\end{aligned}
$$

where $C_{p}>0$ depends only on $p$.

(b) (N.G. Ushakov.) Show that the following inequality holds:

$$
|\varphi(t)| \geqslant 1-\frac{t^{2} \mathrm{D} \xi}{2}
$$

and if $\mathrm{E} \xi=0$, then

$$
|1-\varphi(t)| \leqslant \frac{t^{2} \mathrm{E} \xi^{2}}{2}
$$
