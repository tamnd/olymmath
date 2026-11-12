---
tag: SFT7N2NH6D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34065
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\xi$ be a random variable with characteristic function $\varphi=\varphi(t)$. Show that

$$
r^{\alpha} \mathrm{P}(|\xi|>r)=O(1), r \rightarrow \infty
$$

is equivalent to

$$
|\varphi(t)|=1+O\left(|t|^{\alpha}\right), t \rightarrow 0
$$

In the case $\alpha=2$, the restriction on $\varphi(t)$ is (only) a sufficient condition.

Also verify that

$$
r^{\alpha} \mathrm{P}(|\xi|>r)=o(1), r \rightarrow \infty \Leftrightarrow|\varphi(t)|=1+o\left(|t|^{\alpha}\right), t \rightarrow 0
$$

Remark. With a slight modification of the proof given below, the result can be refined as follows:

$$
\begin{aligned}
& r^{\alpha} \mathrm{P}(|\xi|>r)=O(1) \Leftrightarrow n\left[1-\left|\varphi\left(t n^{-1 / \alpha}\right)\right|\right]=O(1) \\
& r^{\alpha} \mathrm{P}(|\xi|>r)=o(1) \Leftrightarrow n\left[1-\left|\varphi\left(t n^{-1 / \alpha}\right)\right|\right]=o(1)
\end{aligned}
$$

where we assume that $0<\alpha<2, n \in \mathbb{N}, t \in \mathbb{R}, n \rightarrow \infty$ and $r \rightarrow \infty$.
