---
tag: VWCA6Q53QC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34159
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(See [13], [39].) Assuming that $\int_{\mathbb{R}} x p(x) d x=0$ and $\int_{\mathbb{R}} x^{2} p(x) d x = \sigma^{2} > 0$, provide a formal derivation of another widely used expansion - the Edgeworth expansion:

$$
\sigma p(\sigma x)=\varphi(x)+\varphi(x) \sum_{n \geqslant 1} \frac{1}{\sigma^{n}} \sum_{n} \mathrm{H}_{n+2 k}(x) \prod_{j=1}^{n} \frac{1}{k_{j}!}\left[\frac{s_{j+2} / s_{2}}{(j+2)!}\right]^{k_{j}}
$$

where $\sum_{n}$ is the sum over all integers $k, k_{1}, \ldots, k_{n} \geqslant 0$ with

$$
k_{1}+2 k_{2}+\ldots+n k_{n}=n, k_{1}+\ldots+k_{n}=k
$$

and $\left(s_{n}\right)_{n \geqslant 2}$ are the semi-invariants of the distribution $p=p(x)$.

Remark. For the derivation of the last expansion, the formula of the form

$$
\frac{d^{n} \exp f(x)}{d x^{n}}=n!\exp f(x) \sum_{n} \prod_{j=1}^{n} \frac{1}{k_{j}!}\left[\frac{f^{(j)}(x)}{j!}\right]^{k_{j}}, n \geqslant 1
$$

is useful, which holds for all infinitely differentiable functions $f=f(x)$ (for all $x \in \mathbb{R}$).
