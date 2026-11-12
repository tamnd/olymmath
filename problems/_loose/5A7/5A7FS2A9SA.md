---
tag: 5A7FS2A9SA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33802
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(Riesz Construction for the Lebesgue Integral, [14].) Let

$$
(\Omega, \mathscr{F})=((0,1], \mathscr{B}((0,1]))
$$

For any step function

$$
\xi(\omega)=\sum_{i} c_{i} I_{\left(\omega_{i}, \omega_{i+1}\right]}(\omega)
$$

where $0=\omega_{0}<\omega_{1}<\ldots<\omega_{n}=1$ and $c_{i} \in \mathbb{R}, 0 \leqslant i \leqslant n-1$, define the quantity

$$
\overline{\mathrm{E}} \xi=\sum_{i} c_{i}\left(\omega_{i+1}-\omega_{i}\right)
$$

(a) Denote by $C^{+}$ the class of all such functions $\xi$ (with values in $\overline{\mathbb{R}}$) such that $\xi_{n} \uparrow \xi$ almost everywhere with respect to the Lebesgue measure $\lambda$ on $((0,1], \mathscr{B}((0,1]))$ for some step functions $\xi_{n}$, and $\sup \overline{\mathrm{E}} \xi_{n}<\infty$, and set in this case

$$
\overline{\mathrm{E}} \xi=\lim _{n} \overline{\mathrm{E}} \xi_{n}
$$

Prove that this definition of $\overline{\mathrm{E}} \xi$ for $\xi \in C^{+}$ is correct in the sense that $\lim _{n} \overline{\mathrm{E}} \xi_{n}$ always exists and if $\xi_{n} \uparrow \xi$ and $\eta_{n} \uparrow \xi$ for some step functions $\xi_{n}$ and $\eta_{n}$ with finite $\sup _{n} \overline{\mathrm{E}} \xi_{n}$ and $\sup _{n} \overline{\mathrm{E}} \eta_{n}$, then

$$
\lim _{n} \overline{\mathrm{E}} \xi_{n}=\lim _{n} \overline{\mathrm{E}} \eta_{n}
$$

(b) Prove that if the function $\xi$ is Riemann integrable, then $\xi, -\xi \in C^{+}$, and in this case $\overline{\mathbf{E}}$ coincides with the Riemann integral.

(c) Call a function $\xi$ Riesz integrable if $\xi=\xi_{+}-\xi_{-}$ for some $\xi_{-}, \xi_{+} \in C^{+}, \overline{\mathrm{E}} \xi_{-}, \overline{\mathrm{E}} \xi_{+}<\infty$, and set in this case

$$
\overline{\mathrm{E}} \xi=\overline{\mathrm{E}} \xi_{+}-\overline{\mathrm{E}} \xi_{-}
$$

Verify the correctness of this definition of $\overline{\mathrm{E}} \xi$.

(d) Prove that the class of Riesz integrable functions coincides with the class of Lebesgue integrable functions and in this case $\bar{E} \xi$ is nothing other than the Lebesgue integral $\boldsymbol{E} \xi=\int_{\Omega} \xi(\omega) \lambda(d \omega)$, where $\lambda$ is, as above, the Lebesgue measure on $((0,1], \mathscr{B}((0,1]))$.

(e) Show that the class $C^{+}$ does not cover all non-negative bounded random variables $\xi, \mathrm{E} \xi<\infty$ and, generally speaking, when representing such $\xi$ in the form $\xi_{+}-\xi_{-}, \xi_{-}, \xi_{+} \in C^{+}$, it is inevitable to resort to unbounded variables $\xi_{-}$ and $\xi_{+}$.

Remark. The Riesz construction allows constructing the Lebesgue integral on $((0,1], \mathscr{B}((0,1]))$ without addressing such issues as the extension of measures. Indeed, it is only necessary to know what a set of zero Lebesgue measure is, as well as the measure of sufficiently simple sets used to define step functions.
