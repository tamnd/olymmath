---
tag: 5CBRC0J4A7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33800
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $(\Omega, \mathscr{F}, \mathrm{P})=((0,1], \mathscr{B}((0,1]), \lambda)$, where $\lambda$ is the Lebesgue measure, and $\xi:(0,1] \rightarrow[0,1]$ is a Borel function. Consider the lower and upper Riemann sums

$$
\begin{aligned}
& R_{*} \xi=\sup \sum_{i} \lambda\left(A_{i}\right) \inf _{\omega \in A_{i}} \xi(\omega) \\
& R^{*} \xi=\inf \sum_{i} \lambda\left(A_{i}\right) \sup _{\omega \in A_{i}} \xi(\omega)
\end{aligned}
$$

where the sup and inf are taken over all finite partitions $\left(A_{1}, \ldots, A_{n}\right)$ of the space $\Omega=(0,1]$, with $A_{i}$ of the form $\left(a_{i}, b_{i}\right]$. (See also V1.II.6.11.) Prove the equivalence of the following conditions:

(1) $R_{*} \xi=R^{*} \xi$

(2) the Lebesgue measure of the set $D_{\xi}$ of discontinuity points of $\xi$ is zero;

(3) there exists a constant $R(\xi)$ such that for every $\varepsilon>0$ there is a $\delta>0$ for which

$$
\left|R(\xi)-\sum_{i} \xi\left(\omega_{i}\right)\left(b_{i}-a_{i}\right)\right|<\varepsilon
$$

for any finite system of non-overlapping intervals $\left(a_{i}, b_{i}\right]$, $\sum\left(a_{i}, b_{i}\right]=(0,1]$ and $\max \left(b_{i}-a_{i}\right)<\delta$ for any $\omega_{i} \in\left(a_{i}, b_{i}\right]$.

Show that if any of the above conditions is satisfied, then $R(\xi)=R^{*} \xi=R_{*} \xi$.

Remark. The quantity $R(\xi)$ is nothing other than the integral $P u$ of Mano.
