---
tag: 57CP9SHDTH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33837
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We will say that $\sigma$-algebras $\mathscr{A}$ and $\mathscr{B}$ are conditionally independent relative to $\sigma$-algebra $\mathscr{C}$ if $\mathrm{P}(A B \mid \mathscr{C})=\mathrm{P}(A \mid \mathscr{C}) \mathrm{P}(B \mid \mathscr{C})$ for all $A \in \mathscr{A}$ and $B \in \mathscr{B}$.

Show that the conditional independence of $\mathscr{A}$ and $\mathscr{B}$ relative to $\mathscr{C}$ is equivalent to the ( $\mathrm{P}-$ a.s.) fulfillment of any of the following conditions:

(1) $\mathrm{P}(A \mid \mathscr{B} \vee \mathscr{C})=\mathrm{P}(A \mid \mathscr{C})$ for all $A \in \mathscr{A}$ (here and below $\mathscr{B} \vee \mathscr{C}=\sigma(\mathscr{B} \cup \mathscr{C}))$

(2) $\mathrm{E}(X \mid \mathscr{B} \vee \mathscr{C})=\mathrm{E}(X \mid \mathscr{C})$ for any $\mathscr{A}$-measurable random variable $X$, $\mathrm{E}|X|<\infty$

(3) $\mathrm{P}(A \mid \mathscr{B} \vee \mathscr{C})=\mathrm{P}(A \mid \mathscr{C})$ for any set $A$ from the system $\mathscr{P}_{a}$ of subsets forming a $\pi$-system such that $\mathscr{A}=\sigma\left(\mathscr{P}_{a}\right)$;

(4) $\mathrm{P}(A B \mid \mathscr{C})=\mathrm{P}(A \mid \mathscr{C}) \mathrm{P}(B \mid \mathscr{C})$ for any sets $A$ and $B$ from $\pi$-systems $\mathscr{P}_{a}$ and $\mathscr{P}_{b}$ respectively, satisfying the conditions $\mathscr{A}=\sigma\left(\mathscr{P}_{a}\right)$ and $\mathscr{B}=\sigma\left(\mathscr{P}_{b}\right)$.
