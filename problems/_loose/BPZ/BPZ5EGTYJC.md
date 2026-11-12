---
tag: BPZ5EGTYJC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34062
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In this problem, following the work [70], we are asked to establish the inequality

$$
1-\operatorname{Re} \varphi(n t) \leqslant n\left[1-\operatorname{Re}^{n} \varphi(t)\right] \leqslant n^{2}[1-\operatorname{Re} \varphi(t)]
$$

valid for all $n \geqslant 1, t \in \mathbb{R}$ and the characteristic function $\varphi=\varphi(t)$ of any random variable $\xi$. The proof should be carried out in the following steps.

(a) First, establish that for $x \in \mathbb{R}$, the inequality

$$
\left|\frac{\sin n x}{\sin x}\right| \leqslant n
$$

holds.

(b) Using the above estimate, show that for each $x \in \mathbb{R}$ (and $n \geqslant 1$), the inequality

$$
1-\cos n x \leqslant n\left(1-\cos ^{n} x\right)
$$

holds.

(c) Derive that the inequality $(*)$ is true for even $n$.

(d) Prove that for $n\left(1-a^{n}\right)<2$ and $|a| \leqslant 1$, the inequalities

$$
x^{n} \geqslant a^{n}+n a^{n-1}(x-a), |x| \leqslant 1
$$

hold, and from this obtain the inequality $(*)$ for odd $n$.

(e) Also prove that for all $n \geqslant 1$ and $t \in \mathbb{R}$, the inequality

$$
1-|\varphi(n t)|^{2} \leqslant n^{2}\left[1-|\varphi(t)|^{2}\right]
$$

holds.
