---
tag: VWZ0QQ702P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34158
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\xi \sim \mathscr{N}(0,1)$. Define the Hermite polynomials by the formula

$$
\mathrm{H}_{n}(x)=(-1)^{n} \frac{D^{n} \varphi(x)}{\varphi(x)}, n \geqslant 1
$$

where $D^{n}$ is the $n$-th order derivative ($n \geqslant 0$), and $\varphi=\varphi(x)$ is the density of $\xi$.

(a) Show that

$$
\begin{gathered}
\mathrm{H}_{n}(x)=\mathrm{E}(x+i \xi)^{n} \\
\mathrm{EH}_{n}(x+\sigma \xi)= \begin{cases}x^{n}, & \sigma=1 \\
\left(1-\sigma^{2}\right)^{n / 2} \mathrm{H}_{n}\left(\frac{x}{\sqrt{1-\sigma^{2}}}\right), & \sigma \in[0,1)\end{cases}
\end{gathered}
$$

(b) Let $\eta \sim \mathscr{N}(0,1)$, and suppose $(\xi, \eta)$ is a Gaussian vector with $\mathrm{E} \xi \eta = \rho > 0$. Establish that almost surely

$$
\mathrm{E}\left(\mathrm{H}_{n}(\eta) \mid \xi\right)=\rho^{n} \mathrm{H}_{n}(\xi)
$$

(c) Prove that $\mathrm{H}_{n}(x)=x^{n}+\ldots$ is a polynomial of degree $n$ ($n \geqslant 0$), and that

$$
\mathrm{EH}_{n}(\xi) \mathrm{H}_{m}(\xi)= \begin{cases}n!, & n=m \\ 0, & n \neq m\end{cases}
$$

From this, deduce that any function $f(x)$ for which $\mathbf{E}|f(\xi)|^{2}<\infty$ admits the following representation in the space $L^{2}$:

$$
f(\xi)=\sum_{n=0}^{\infty} \frac{\mathrm{H}_{n}(\xi)}{n!} \mathrm{E} f(\xi) \mathrm{H}_{n}(\xi)=\mathrm{E} f(\xi)+\xi \cdot \mathrm{E} \xi f(\xi)+\ldots
$$
