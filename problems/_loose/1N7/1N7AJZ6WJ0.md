---
tag: 1N7AJZ6WJ0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33862
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the probability space ( $\Omega, \mathscr{F}, \mathrm{P}$ ) as the space $([0,1], \mathscr{B}([0,1]), \lambda)$, where $\lambda$ is the Lebesgue measure. Provide an example of a $\sigma$-subalgebra $\mathscr{G} \subseteq \mathscr{B}([0,1])$ for which the conditional expectation $\mathrm{E}(1 \mid \mathscr{G})(\omega)$ has a version given by the Dirichlet function

$$
d(\omega)= \begin{cases}1, & \omega \text { is irrational, } \\ 0, & \omega \text { is rational. }\end{cases}
$$

Thus, it is entirely possible that some version of the conditional expectation $\mathrm{E}(\xi \mid \mathscr{G})(\omega)$ of a "smooth" function $\xi=\xi(\omega)$, such as, for example, $\xi(\omega) \equiv 1$, can be an extremely "non-smooth" function of $\omega$.
