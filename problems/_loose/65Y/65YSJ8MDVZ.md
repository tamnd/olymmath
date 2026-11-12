---
tag: 65YSJ8MDVZ
kind: problem
type: answer
answer: \frac{r}{p}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33939
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
When a binomial distribution is introduced, the number of trials $n$ is fixed, and the probability $\mathrm{P}_{n}(\nu=r)$ that the number of "successes" $\nu$ in these $n$ trials equals $r$ is considered. These probabilities $\mathrm{P}_{n}(\nu=r)=C_{n}^{r} p^{r} q^{n-r}, 0 \leqslant r \leqslant n$, form the binomial distribution, where $p$ is the probability of a single "success," and $q=1-p$.

The negative binomial distribution $\mathrm{P}^{r}(\tau=k)$ (also known as the inverse binomial or Pascal distribution) arises when the question is about the probability that $r$ "successes" first appear on the (random) step $\tau=k(\geqslant r)$. Show that

$$
\mathrm{P}^{r}(\tau=k)=C_{k-1}^{r-1} p^{r} q^{k-r}, k \geqslant r
$$

$r=1,2, \ldots$, and verify that $\mathrm{E}^{r} \tau=r / p$.
