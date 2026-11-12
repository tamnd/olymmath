---
tag: D34DGWP44R
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33811
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $h=h(t, x)$ be a function defined on the set $[a, b] \times \mathbb{R}$, where $a, b \in \mathbb{R}$ and $a < b$.

(a) Suppose that

1) for each $x \in \mathbb{R}$, the function $h(t, x), t \in [a, b]$, is continuous;
2) for each $t \in [a, b]$, the function $h(t, x), x \in \mathbb{R}$, is $\mathscr{B}(\mathbb{R})$-measurable (i.e., Borel measurable).

Show that then the function $h=h(t, x), t \in [a, b], x \in \mathbb{R}$, is $\mathscr{B}([a, b]) \times \mathscr{B}(\mathbb{R})$-measurable.

(b) Let now $\xi$ be a random variable defined on some probability space. Show that under conditions 1 and 2 and the condition

3) the family of random variables $\{h(t, \xi), t \in [a, b]\}$ is uniformly integrable, the following properties hold:

(i) the expectation $f(t) = \mathrm{E} h(t, \xi)$ is a continuous function of $t \in [a, b]$
(ii) if $H(t, x) = \int_{a}^{t} h(s, x) ds$, then the derivative $\frac{d}{d t} \mathrm{E} H(t, \xi)$ exists for all $t \in (a, b)$ and equals $\mathrm{E} h(t, \xi)$, i.e.,

$$
\frac{d}{d t} \mathrm{E} \int_{a}^{t} h(s, \xi) ds = \mathrm{E} h(t, \xi)
$$
