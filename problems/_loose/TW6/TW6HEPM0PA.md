---
tag: TW6HEPM0PA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77978
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\mathrm{G}$ be a finite undirected graph, $\mathrm{n} \in \mathbb{N}^{*}, \mathrm{~d} \in \mathbb{N}^{*}$ such that the degree of every vertex of $G$ is bounded by $d, x$ a vertex of $G$. We denote $a(n, x)$ the number of induced connected subgraphs of $\mathrm{G}$ containing $\mathrm{n}$ vertices including the vertex $x$ (an induced subgraph $\mathrm{U}$ is a graph whose vertices are vertices of $\mathrm{G}$ and if $x$ and $y$ are vertices of $\mathrm{U}, x$ is connected by an edge to $y$ in $\mathrm{U}$ if and only if $x$ is connected by an edge to $y$ in $G$).

1. Show that $a(n, x) \leqslant 2^{\text {nd }}$.
2. Show that $a(n, x) \leqslant\left(\frac{(d+1)^{d+1}}{d^{d}}\right)^{n}$
