---
tag: H4MP8WY4QY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34044
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\mu$ be a probability measure on $\left(\mathbb{R}^{n}, \mathscr{B}\left(\mathbb{R}^{n}\right)\right)$ with distribution function $F=F(x), x \in \mathbb{R}^{n}$, and characteristic function $\varphi=\varphi(t)$, $t \in \mathbb{R}^{n}$.

Establish the validity of the multidimensional inversion formula

$$
\begin{aligned}
\int_{\mathbb{R}^{n}} \prod_{k=1}^{n}\left[I_{\left(a_{k}, b_{k}\right)}+\frac{I_{\left\{a_{k}\right\}}+I_{\left\{b_{k}\right\}}}{2}\right] & d \mu= \\
& =\lim _{c \rightarrow \infty} \frac{1}{(2 \pi)^{n}} \int_{[-c, c]^{n}} \prod_{k=1}^{n} \frac{e^{-i t_{k} a_{k}}-e^{-i t_{k} b_{k}}}{i t_{k}} \varphi(t) d t
\end{aligned}
$$

for all $\left(a_{1}, \ldots, a_{n}\right),\left(b_{1}, \ldots, b_{n}\right) \in \mathbb{R}^{n}$, where $t=\left(t_{1}, \ldots, t_{n}\right)$.

Remark. If for all $k, 1 \leqslant k \leqslant n$, the points $a_{k}, b_{k}$ are points of continuity of the marginal distribution functions $F_{k}\left(x_{k}\right)$ obtained from $F\left(x_{1}, \ldots, x_{n}\right)$, then

$$
\mu\left(\left(a_{1}, b_{1}\right) \times \ldots \times\left(a_{n}, b_{n}\right)\right)=\int_{\mathbb{R}^{n}} \prod_{k=1}^{n}\left[I_{\left(a_{k}, b_{k}\right)}+\frac{I_{\left\{a_{k}\right\}}+I_{\left\{b_{k}\right\}}}{2}\right] d \mu
$$
