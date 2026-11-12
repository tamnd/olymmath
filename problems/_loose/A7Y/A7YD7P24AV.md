---
tag: A7YD7P24AV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33945
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The multidimensional analog of the beta distribution is the Dirichlet distribution, introduced as a distribution on the set

$$
\Delta_{n-1}=\left\{\left(x_{1}, \ldots, x_{n-1}\right): x_{i} \in \mathbb{R}_{+}, 0 \leqslant x_{1}+\ldots+x_{n-1} \leqslant 1\right\}, n \geqslant 2
$$

defined by the density

$$
\begin{aligned}
& f\left(x_{1}, \ldots, x_{n-1} ; \alpha_{1}, \ldots, \alpha_{n}\right)= \\
& =\frac{\Gamma\left(\alpha_{1}+\ldots+\alpha_{n}\right)}{\Gamma\left(\alpha_{1}\right) \ldots \Gamma\left(\alpha_{n}\right)} x_{1}^{\alpha_{1}-1} \ldots x_{n-1}^{\alpha_{n-1}-1}\left[1-\left(x_{1}+\ldots+x_{n-1}\right)\right]^{\alpha_{n}-1}
\end{aligned}
$$

where the parameters $\alpha_{1}, \ldots, \alpha_{n}$ are positive. Sometimes this distribution is introduced on the simplex $\left\{\left(x_{1}, \ldots, x_{n}\right): x_{i} \geqslant 0, \sum_{i=1}^{n} x_{i}=1\right\}$ using the "density"

$$
g\left(x_{1}, \ldots, x_{n} ; \alpha_{1}, \ldots, \alpha_{n}\right)=\frac{\Gamma\left(\alpha_{1}+\ldots+\alpha_{n}\right)}{\Gamma\left(\alpha_{1}\right) \ldots \Gamma\left(\alpha_{n}\right)} x_{1}^{\alpha_{1}} \ldots x_{n}^{\alpha_{n}}
$$

but we put the word "density" in quotes here because, despite its natural appearance as a density, the function $g$ is not a density with respect to the Lebesgue measure in $\mathbb{R}^{n}$.

Let the random vector $X=\left(X_{1}, \ldots, X_{n}\right)$ with non-negative components $X_{i} \geqslant 0$ such that $X_{1}+\ldots+X_{n}=1$, have the Dirichlet distribution with density $f\left(x_{1}, \ldots, x_{k-1} ; \alpha_{1}, \ldots, \alpha_{n}\right)$ on $\Delta_{n-1}$ (in the sense that this is the density of the distribution of the random variables $X_{1}, \ldots, X_{n-1}$, remaining in the vector $(X_{1}, \ldots, X_{n})$ after excluding the last component $X_{n}$ using the equality $X_{1}+\ldots+X_{n}=1$).

(a) Show that

$$
\begin{aligned}
& \mathrm{E} X_{j}=\frac{\alpha_{j}}{A_{n}}, \mathrm{D} X_{j}=\frac{\alpha_{j}\left(A_{n}-\alpha_{j}\right)}{A_{n}^{2}\left(A_{n}+1\right)} \\
& \operatorname{cov}\left(X_{j}, X_{k}\right)=-\frac{\alpha_{j} \alpha_{k}}{A_{n}^{2}\left(A_{n}+1\right)}, j \neq k
\end{aligned}
$$

where $A_{n}=\alpha_{1}+\ldots+\alpha_{n}$.

(b) Show that for non-negative $\beta_{1}, \ldots, \beta_{n}$, the following equality holds:

$$
\mathrm{E} X_{1}^{\beta_{1}} \ldots X_{n}^{\beta_{n}}=\frac{\Gamma\left(\sum_{i=1}^{n} \alpha_{i}\right) \prod_{i=1}^{n} \Gamma\left(\alpha_{i}+\beta_{i}\right)}{\prod_{i=1}^{n} \Gamma\left(\alpha_{i}\right) \Gamma\left(\sum_{i=1}^{n} \alpha_{i}+\sum_{i=1}^{n} \beta_{i}\right)}
$$
